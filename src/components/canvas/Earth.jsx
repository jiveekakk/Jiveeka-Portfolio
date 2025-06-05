import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const DeathStar = () => {
  const deathStar = useGLTF("./death star/scene.gltf"); // Update path to your Death Star model

  return (
    <primitive 
      object={deathStar.scene} 
      scale={0.05} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
        
        {/* Better lighting setup for 3D models */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={0.8} 
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <DeathStar />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
