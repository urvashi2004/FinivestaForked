import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import './ModelViewer.css';

const GLTFModel = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

// Auto-center and zoom camera
const CameraRig = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    camera.position.set(0, 5, 0); // Above the model
    camera.up.set(0, 0, -1);      // Adjust the "up" vector so Z points toward top
    camera.lookAt(0, 0, 0);       // Look straight down
  }, [camera]);

  return (
    <OrbitControls
      args={[camera, gl.domElement]}
      enableZoom={true}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      target={[0, 0, 0]}
    />
  );
};



const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.7} />
      <Suspense fallback={null}>
        <GLTFModel path={modelPath} />
      </Suspense>
      <CameraRig />
      <Environment preset="sunset" />
      <ContactShadows position={[0, 0, 0]} opacity={1} scale={10} blur={1} far={5} />
    </Canvas>
  );
};

export default ModelViewer;