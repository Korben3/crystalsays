import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import tone3 from "../assets/tone-3.mp3";
import useSound from "use-sound";

type GLTFResult = GLTF & {
  nodes: {
    rock002: THREE.Mesh;
    crystal_3: THREE.Mesh;
    crystal_2: THREE.Mesh;
    crystal_1: THREE.Mesh;
    crystal_1001: THREE.Mesh;
  };
  materials: {
    rock: THREE.MeshStandardMaterial;
    crystal_blue: THREE.MeshStandardMaterial;
  };
};

export default function Crystals3red({ ...props }: JSX.IntrinsicElements["group"] & { selected: boolean }) {
  const [play] = useSound(tone3);

  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/assets/models/crystals-3-red.glb") as GLTFResult;

  useEffect(() => {
    if (props.selected) {
      play();
    }
  }, [play, props.selected]);

  return (
    <group ref={group} {...props} dispose={null}>
      {props.selected && (
        <>
          <pointLight position={[3, 7, -1.5]} color="#bf3434" intensity={10} distance={7} />
          <Sparkles position={[2.2, 4, -1.5]} size={3} scale={4.5} color="#bf3434" noise={[2, 3, 2]} />
        </>
      )}
      <mesh
        geometry={nodes.rock002.geometry}
        material={materials.rock}
        position={[0.01, 0.22, -0.2]}
        scale={2.02}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_3.geometry}
        material={materials.crystal_blue}
        position={[0.81, 1.85, 1]}
        rotation={[0, -1.23, -0.3]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_2.geometry}
        material={materials.crystal_blue}
        position={[-1.42, 4.9, -0.41]}
        rotation={[-0.02, -0.27, 0.3]}
        scale={1.12}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_1.geometry}
        material={materials.crystal_blue}
        position={[2.54, 1.28, -0.47]}
        rotation={[0.06, 0.14, -0.09]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_1001.geometry}
        material={materials.crystal_blue}
        position={[1.43, 1.13, -1.67]}
        rotation={[-0.3, -0.28, -0.09]}
        scale={0.82}
        castShadow
      />
    </group>
  );
}

useGLTF.preload("/assets/models/crystals-3-red.glb");
