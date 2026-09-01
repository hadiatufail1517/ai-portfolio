import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { heroVertexShader, heroFragmentShader } from '../shaders/heroShader';

export default function HeroBackgroundShader() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId = null;
    let renderer = null;
    let material = null;
    let geometry = null;
    let scene = null;
    let camera = null;

    // Smooth mouse interpolation tracking
    const targetMouse = { x: 0.5, y: 0.5 };
    const currentMouse = { x: 0.5, y: 0.5 };

    // Reduced motion media query check
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isReducedMotion = motionQuery.matches;

    // Track tab visibility
    let isTabVisible = !document.hidden;

    // Get container dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Initialize Three.js Scene and Camera
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 2. Setup WebGL Renderer with capped DPR (max 2 for performance)
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
    } catch (err) {
      console.warn('WebGL initialization failed for Hero background:', err);
      return;
    }

    // 3. Create Custom Shader Material with required Uniforms
    geometry = new THREE.PlaneGeometry(2, 2);
    material = new THREE.ShaderMaterial({
      vertexShader: heroVertexShader,
      fragmentShader: heroFragmentShader,
      uniforms: {
        u_time: { value: 10.0 }, // Initial static frame offset
        u_resolution: { value: new THREE.Vector2(width, height) },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      depthWrite: false,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4. Smooth Mouse Move Event Listener
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        // Normalize mouse coordinates relative to container (0.0 to 1.0)
        const x = (e.clientX - rect.left) / rect.width;
        // Invert Y axis for WebGL coordinate space
        const y = 1.0 - (e.clientY - rect.top) / rect.height;

        targetMouse.x = Math.max(0, Math.min(1, x));
        targetMouse.y = Math.max(0, Math.min(1, y));
      }
    };

    // Attach listener to window so subtle interaction works smoothly even across padding
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // 5. Handle Viewport / Container Resizing
    const handleResize = () => {
      if (!container || !renderer || !material) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(newWidth, newHeight, false);
      material.uniforms.u_resolution.value.set(newWidth, newHeight);

      // Render static frame on resize if reduced motion is enabled
      if (isReducedMotion) {
        renderer.render(scene, camera);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 6. Reduced Motion Listener
    const handleMotionChange = (e) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        material.uniforms.u_time.value = 10.0;
        renderer.render(scene, camera);
      } else {
        startAnimationLoop();
      }
    };
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    } else if (motionQuery.addListener) {
      motionQuery.addListener(handleMotionChange);
    }

    // 7. Page Visibility API (Pause when tab is hidden)
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !isReducedMotion) {
        startAnimationLoop();
      } else if (!isTabVisible && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 8. Animation & Render Loop
    const startTime = performance.now();

    const renderLoop = (timestamp) => {
      if (!isTabVisible || isReducedMotion) return;

      // Smooth lerp mouse coordinates for fluid, non-jerky movement
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

      // Update uniforms
      const elapsedTime = (timestamp - startTime) * 0.001;
      material.uniforms.u_time.value = elapsedTime;
      material.uniforms.u_mouse.value.set(currentMouse.x, currentMouse.y);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const startAnimationLoop = () => {
      if (!animationFrameId && isTabVisible && !isReducedMotion) {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    // Render initial frame and start loop
    renderer.render(scene, camera);
    if (!isReducedMotion) {
      startAnimationLoop();
    }

    // 9. Comprehensive Cleanup on Unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      } else if (motionQuery.removeListener) {
        motionQuery.removeListener(handleMotionChange);
      }
      resizeObserver.disconnect();

      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }
    };
  }, []);

  return (
    <div className="hero-shader-wrapper" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="hero-shader-canvas" />
      <div className="hero-shader-overlay" />
    </div>
  );
}
