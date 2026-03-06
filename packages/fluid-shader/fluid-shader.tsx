"use client";

import React, { useEffect, useRef } from "react";

interface FluidRenderProps {
  color1?: [number, number, number];
  color2?: [number, number, number];
  backgroundColor?: [number, number, number];
  speed?: number;
  complexity?: number;
  scale?: number;
  elevation?: number;
  glossiness?: number;
  className?: string;
}

interface UniformLocations {
  res: WebGLUniformLocation | null;
  time: WebGLUniformLocation | null;
  c1: WebGLUniformLocation | null;
  c2: WebGLUniformLocation | null;
  bg: WebGLUniformLocation | null;
  speed: WebGLUniformLocation | null;
  comp: WebGLUniformLocation | null;
  scale: WebGLUniformLocation | null;
  elev: WebGLUniformLocation | null;
  gloss: WebGLUniformLocation | null;
}

const FluidRender: React.FC<FluidRenderProps> = ({
  color1 = [0.086, 0.647, 0.996],
  color2 = [0.278, 0.651, 1.0],
  backgroundColor = [1.0, 1.0, 1.0],
  speed = 0.6,
  complexity = 0.8,
  scale = 2.2,
  elevation = 0,
  glossiness = 53,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { antialias: true }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    if (!gl) return;

    glRef.current = gl;

    // Vertex shader
    const vs =
      "attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }";

    // Fragment shader
    const fs = `
    precision highp float;
    uniform vec2 u_resolution; uniform float u_time;
    uniform vec3 u_color1; uniform vec3 u_color2; uniform vec3 u_bg;
    uniform float u_speed; uniform float u_complexity; uniform float u_scale;
    uniform float u_elevation; uniform float u_glossiness;

    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy ); vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4( x.xy, y.xy ); vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m; return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    float surface(vec2 p) {
        vec3 p3 = vec3(p * u_scale, u_time * u_speed * 0.15);
        float n1 = snoise(p3);
        float n2 = snoise(p3 + vec3(4.1, 2.3, u_time * 0.1) + n1 * u_complexity);
        float n3 = snoise(p3 + vec3(1.2, 5.7, -u_time * 0.1) + n2 * u_complexity);
        return n3;
    }

    float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }

    void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv - 0.5;
        p.x *= u_resolution.x / u_resolution.y;
        
        // Topography mapping
        float h = surface(p);
        
        // Calculate 3D Normals
        float eps = 0.01;
        float dx = (surface(p + vec2(eps, 0.0)) - surface(p - vec2(eps, 0.0))) / (2.0 * eps);
        float dy = (surface(p + vec2(0.0, eps)) - surface(p - vec2(0.0, eps))) / (2.0 * eps);
        vec3 normal = normalize(vec3(-dx * u_elevation, -dy * u_elevation, 1.0));
        
        // Lighting Setup
        vec3 lightDir = normalize(vec3(0.5, 0.8, 1.2));
        vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
        vec3 halfVector = normalize(lightDir + viewDir);
        
        float diff = max(dot(normal, lightDir), 0.0);
        float spec = pow(max(dot(normal, halfVector), 0.0), u_glossiness);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        
        // Base Color & SSS Fake
        float mixVal = smoothstep(-0.6, 0.6, h);
        vec3 baseColor = mix(u_color1, u_color2, mixVal);
        
        float sss = smoothstep(-0.8, 0.8, h) * 0.3;
        vec3 litColor = baseColor * (diff * 0.6 + 0.4 + sss);
        
        // Specular & Rim
        litColor += vec3(1.0) * spec * 0.4;
        litColor += u_color2 * fresnel * 0.4;
        
        // Inner Ambient Occlusion
        float ao = smoothstep(-0.8, 0.2, h);
        litColor -= (1.0 - ao) * 0.15;
        
        // Masking & Drop Shadow
        float dist = length(p);
        float mask = smoothstep(0.48, 0.15, dist + h * 0.15);
        float shadowMask = smoothstep(0.55, 0.2, length(p - vec2(0.03, -0.06)) + h * 0.1);
        vec3 bgShadowed = mix(u_bg, mix(u_bg, vec3(0.0), 1.0), shadowMask * 0.15);
        
        vec3 finalCol = mix(bgShadowed, litColor, mask);
        
        // Dithering for buttery smooth gradients
        finalCol += (random(uv) - 0.5) * 0.012;
        
        gl_FragColor = vec4(finalCol, 1.0);
    }`;

    const createShader = (type: number, src: string): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);

      // Check for compilation errors
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }

      return s;
    };

    const prog = gl.createProgram();
    if (!prog) return;

    programRef.current = prog;

    const vsShader = createShader(gl.VERTEX_SHADER, vs);
    const fsShader = createShader(gl.FRAGMENT_SHADER, fs);

    if (!vsShader || !fsShader) {
      console.error("Failed to create shaders");
      return;
    }

    gl.attachShader(prog, vsShader);
    gl.attachShader(prog, fsShader);
    gl.linkProgram(prog);

    // Check for linking errors
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(prog));
      return;
    }

    gl.useProgram(prog);

    // Set up geometry
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const pos = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const loc: UniformLocations = {
      res: gl.getUniformLocation(prog, "u_resolution"),
      time: gl.getUniformLocation(prog, "u_time"),
      c1: gl.getUniformLocation(prog, "u_color1"),
      c2: gl.getUniformLocation(prog, "u_color2"),
      bg: gl.getUniformLocation(prog, "u_bg"),
      speed: gl.getUniformLocation(prog, "u_speed"),
      comp: gl.getUniformLocation(prog, "u_complexity"),
      scale: gl.getUniformLocation(prog, "u_scale"),
      elev: gl.getUniformLocation(prog, "u_elevation"),
      gloss: gl.getUniformLocation(prog, "u_glossiness"),
    };

    // Resize handler
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    const t0 = Date.now();

    // Animation loop
    const draw = () => {
      if (!gl || !prog) return;

      // Update uniforms
      if (loc.res) gl.uniform2f(loc.res, canvas.width, canvas.height);
      if (loc.time) gl.uniform1f(loc.time, (Date.now() - t0) * 0.001);
      if (loc.c1) gl.uniform3fv(loc.c1, color1);
      if (loc.c2) gl.uniform3fv(loc.c2, color2);
      if (loc.bg) gl.uniform3fv(loc.bg, backgroundColor);
      if (loc.speed) gl.uniform1f(loc.speed, speed);
      if (loc.comp) gl.uniform1f(loc.comp, complexity);
      if (loc.scale) gl.uniform1f(loc.scale, scale);
      if (loc.elev) gl.uniform1f(loc.elev, elevation);
      if (loc.gloss) gl.uniform1f(loc.gloss, glossiness);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (gl && prog) {
        // Clean up WebGL resources
        gl.deleteShader(vsShader);
        gl.deleteShader(fsShader);
        gl.deleteProgram(prog);
        gl.deleteBuffer(buffer);
      }
    };
  }, [
    color1,
    color2,
    backgroundColor,
    speed,
    complexity,
    scale,
    elevation,
    glossiness,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      style={{ background: "transparent" }}
    />
  );
};

export default FluidRender;
