/**
 * WebGL as a proxy for "this browser has GPU acceleration". Software renderers
 * (SwiftShader, llvmpipe, Basic Render) make continuous animation and large
 * video compositing expensive, so decorative motion stays off for them.
 *
 * Add `?motion` to the URL to force it on (useful when testing without a GPU).
 */
export function hasGpu(): boolean {
  try {
    if (new URLSearchParams(window.location.search).has("motion")) return true;
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl") as WebGLRenderingContext | null;
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}
