// ============================================================================
// HADIA TUFAIL - HERO SECTION GLSL VERTEX SHADER
// ============================================================================

varying vec2 vUv;

void main() {
    // Pass normalized UV coordinates (0.0 to 1.0) to fragment shader
    vUv = uv;

    // Standard vertex position transformation for a full-screen quad plane
    gl_Position = vec4(position, 1.0);
}
