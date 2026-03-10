"use client";

import React, { useRef, useMemo, useEffect, RefObject } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Effects } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import * as THREE from "three";

// Extend Three.js with UnrealBloomPass
extend({ UnrealBloomPass });

// Declare the extended JSX elements
declare module "@react-three/fiber" {
  interface ThreeElements {
    unrealBloomPass: {
      threshold?: number;
      strength?: number;
      radius?: number;
    };
  }
}

const ParticleSwarm = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 3000;
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor; // Alias for user code compatibility

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
        ),
      );
    }
    return pos;
  }, []);

  // Material & Geometry
  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ color: 0xffffff }),
    [],
  );
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  const PARAMS = useMemo(() => ({ radius: 60, crater: 0, spin: 0.25 }), []);

  const addControl = (id: string, l: string, min: number, max: number, val: number): number => {
    return PARAMS[id as keyof typeof PARAMS] !== undefined ? PARAMS[id as keyof typeof PARAMS] : val;
  };

  const setInfo = (title: string, description: string) => {
    // Implementation for setInfo if needed
    console.log(title, description);
  };
  
  const annotate = () => {};

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;
    const THREE_LIB = THREE;

  // Fix: Check if material has uniforms property using type assertion
  if ((material as any).uniforms && (material as any).uniforms.uTime) {
    (material as any).uniforms.uTime.value = time;
  }

    for (let i = 0; i < count; i++) {
      // USER CODE START
      const radius = addControl("radius", "Moon Radius", 10, 120, 60);
      const crater = addControl("crater", "Crater Depth", 0.0, 8.0, 2.5);
      const spin = addControl("spin", "Rotation", 0.0, 1.5, 0.25);

      if (i === 0) {
        setInfo(
          "Procedural Moon",
          "A rotating lunar sphere generated with a Fibonacci particle distribution and procedural crater noise.",
        );
      }

      const t = time * spin;
      const f = i / (count - 1);

      // Fibonacci sphere distribution
      const ga = 2.399963229728653; // golden angle
      const y = 1 - 2 * f;
      const r = Math.sqrt(1 - y * y);
      const theta = i * ga + t * 0.25;

      let x = Math.cos(theta) * r;
      let z = Math.sin(theta) * r;

      // procedural crater field
      const n =
        Math.sin(x * 18.0 + t * 0.2) * Math.sin(y * 22.0) * Math.sin(z * 18.0);

      const displacement = 1 + n * crater * 0.05;

      // scale to moon radius
      x *= radius * displacement;
      const yy = y * radius * displacement;
      z *= radius * displacement;

      // slow planetary rotation
      const ct = Math.cos(t);
      const st = Math.sin(t);

      const rx = x * ct - z * st;
      const rz = x * st + z * ct;

      target.set(rx, yy, rz);

      // approximate normal for lighting
      const invLen = 1 / Math.sqrt(rx * rx + yy * yy + rz * rz);
      const nx = rx * invLen;
      const ny = yy * invLen;
      const nz = rz * invLen;

      // fixed sunlight direction
      const lx = 0.4;
      const ly = 0.7;
      const lz = 0.5;

      const light = Math.max(0, nx * lx + ny * ly + nz * lz);

      // moon gray shading
      const l = 0.25 + light * 0.55 + n * 0.05;

      color.setHSL(0, 0, l);
      // USER CODE END

      positions[i].lerp(target, 0.1);
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
};

const SphereShader = () => {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Optional overlay text */}
      {/* <div className="absolute bottom-4 left-4 text-white/30 text-xs font-mono z-10">
        Procedural Moon • {new Date().getFullYear()}
      </div> */}

      {/* Canvas container */}
      <Canvas
        camera={{ position: [0, 0, 100], fov: 60 }}
        className="w-full h-full"
      >
        <fog attach="fog" args={["#000000", 0.01]} />
        <ParticleSwarm />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={1.5}
          enableZoom={true}
          enablePan={true}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={1.2}
          panSpeed={0.8}
          maxDistance={200}
          minDistance={30}
        />
        <Effects disableGamma>
          <unrealBloomPass threshold={0} strength={1.8} radius={0.4} />
        </Effects>
      </Canvas>
    </div>
  );
};

export default SphereShader;