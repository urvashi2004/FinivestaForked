import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Load the 3D model
  return (
    <Canvas style={{ height: "200px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <primitive object={scene} scale={1.5} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelViewer;