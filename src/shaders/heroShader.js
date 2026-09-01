// Shader string exports for bulletproof Vite/React integration
export const heroVertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

export const heroFragmentShader = `
// ============================================================================
// HADIA TUFAIL - HERO SECTION GLSL FRAGMENT SHADER
// Theme: Interactive Teal Aurora & Organic Energy Field
// ============================================================================

// Uniforms passed from JavaScript / Three.js material
uniform float u_time;        // Elapsed time in seconds for continuous fluid motion
uniform vec2 u_resolution;   // Screen resolution (width, height) in pixels
uniform vec2 u_mouse;        // Smooth normalized mouse coordinates (0.0 to 1.0)

varying vec2 vUv;

// ----------------------------------------------------------------------------
// Procedural Pseudo-Random Hash Function
// ----------------------------------------------------------------------------
// Generates a 2D deterministic pseudo-random value between 0.0 and 1.0
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// ----------------------------------------------------------------------------
// 2D Value Noise Function
// ----------------------------------------------------------------------------
// Generates smooth continuous 2D value noise using cubic Hermite interpolation
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Smooth cubic Hermite curve (3*f^2 - 2*f^3) for smooth transitions between grid points
    vec2 u = f * f * (3.0 - 2.0 * f);

    // Sample pseudo-random hash values at grid cell corners
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    // Bilinear interpolation between the four corners
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// ----------------------------------------------------------------------------
// Fractional Brownian Motion (FBM)
// ----------------------------------------------------------------------------
// Accumulates multiple octaves of 2D noise at increasing frequencies and decreasing amplitudes
float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    // 2D rotation matrix to reduce grid alignment artifacts across octaves
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    
    for (int i = 0; i < 5; i++) {
        value += amplitude * noise(st * frequency);
        st = rot * st * 2.0;
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    // 1. Convert pixel coordinates into normalized UV coordinates (0.0 to 1.0).
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    // 2. Correct coordinates for the screen aspect ratio so aurora forms remain proportional.
    vec2 uv = st;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;

    // 3. Apply subtle mouse influence with dynamic coordinate distortion.
    vec2 mouseUV = u_mouse;
    mouseUV.x *= aspect;
    
    // Calculate vector offset and distance from current pixel to mouse position
    vec2 mouseOffset = uv - mouseUV;
    float distToMouse = length(mouseOffset);
    
    // Create an organic wave ripple that gently expands outward from cursor position
    float mouseRipple = sin(distToMouse * 10.0 - u_time * 2.0) * exp(-distToMouse * 2.2);
    vec2 mouseDistortion = normalize(mouseOffset + 0.0001) * mouseRipple * 0.045;
    
    // Distort UV domain with mouse influence
    vec2 p = uv + mouseDistortion;

    // 4. Move the procedural noise field over time.
    float t = u_time * 0.12;

    // 5. Generate layered domain-warped FBM noise for fluid aurora wave dynamics.
    // Layer Q: Initial domain warp driven by time offset
    vec2 q = vec2(
        fbm(p + vec2(0.0, t * 0.8)),
        fbm(p + vec2(5.2, 1.3 - t * 0.6))
    );
    
    // Layer R: Secondary domain warp combining primary warp with inverse time shift
    vec2 r = vec2(
        fbm(p + 3.8 * q + vec2(1.7 - t * 0.4, 9.2 + t * 0.2)),
        fbm(p + 3.8 * q + vec2(8.3 + t * 0.3, 2.8 - t * 0.5))
    );

    // Compute final procedural intensity field by evaluating FBM over secondary warp
    float f = fbm(p + 3.8 * r);

    // 6. Convert the noise field into the aurora shape using smoothstep filters.
    float auroraShape = smoothstep(0.15, 0.85, f);
    float ribbonGlow = smoothstep(0.25, 0.75, q.x * r.y);

    // 7. Apply the custom color palette matching the portfolio's visual identity.
    // Portfolio Design System Palette:
    // Base Deep Slate Navy: #0F172A (rgb: 0.059, 0.090, 0.165)
    // Primary Teal: #0F766E (rgb: 0.059, 0.463, 0.431)
    // Secondary Emerald/Teal: #14B8A6 (rgb: 0.078, 0.722, 0.651)
    // Bright Cyan Glow: #0284C7 (rgb: 0.008, 0.518, 0.780)
    // Warm Amber Accent: #F59E0B (rgb: 0.961, 0.620, 0.043)

    vec3 colorBase = vec3(0.059, 0.090, 0.165);         // Slate Navy
    vec3 colorPrimaryTeal = vec3(0.059, 0.463, 0.431);   // Teal Accent
    vec3 colorSecondaryTeal = vec3(0.078, 0.722, 0.651); // Bright Emerald
    vec3 colorCyanGlow = vec3(0.008, 0.518, 0.780);     // Cyan Energy
    vec3 colorAmberHighlight = vec3(0.961, 0.620, 0.043); // Subtle Amber Filament

    // Blend color channels based on noise density and domain warp characteristics
    vec3 col = mix(colorBase, colorPrimaryTeal, auroraShape * 0.85);
    col = mix(col, colorSecondaryTeal, smoothstep(0.2, 0.8, r.x));
    col = mix(col, colorCyanGlow, smoothstep(0.35, 0.85, q.y * f));
    col += colorAmberHighlight * pow(ribbonGlow, 3.2) * 0.22; // Subtle golden energy highlight

    // 8. Add vignette to improve hero content readability around central text area.
    // Radial darkening towards edges to frame content
    float vignette = 1.0 - smoothstep(0.35, 1.1, length(st - vec2(0.5)));
    col = mix(col * 0.8, col, vignette);

    // 9. Add subtle grain for realistic procedural texture.
    float grain = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.03;
    col += grain;

    // Output final color with solid opacity
    gl_FragColor = vec4(col, 1.0);
}
`;
