import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    rock002: THREE.Mesh;
  };
  materials: {
    rock: THREE.MeshStandardMaterial;
  };
};

export default function Rock1({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/assets/models/rock-1.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.rock002.geometry} material={materials.rock} position={[-0.11, 0.4, 0.09]} />
    </group>
  );
}

useGLTF.preload("/assets/models/rock-1.glb");
