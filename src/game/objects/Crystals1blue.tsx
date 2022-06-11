import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import tone1 from "../assets/tone-1.mp3";
import useSound from "use-sound";

type GLTFResult = GLTF & {
  nodes: {
    rock004: THREE.Mesh;
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

export default function Crystals1blue({ ...props }: JSX.IntrinsicElements["group"] & { selected: boolean }) {
  // const pointLight = useRef(null!);
  // useHelper(pointLight, THREE.PointLightHelper, 0.5, "hotpink");
  const [play] = useSound(tone1);

  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/assets/models/crystals-1-blue.glb") as GLTFResult;

  useEffect(() => {
    if (props.selected) {
      play();
    }
  }, [play, props.selected]);

  return (
    <group ref={group} {...props} dispose={null}>
      {props.selected && (
        <>
          <pointLight position={[3, 7, -1.5]} color="#5bbbff" intensity={10} distance={7} />
          <Sparkles position={[2.5, 4, -1.5]} size={2} scale={4.5} color="#5bbbff" noise={[2, 3, 2]} />
        </>
      )}
      <mesh
        geometry={nodes.rock004.geometry}
        material={materials.rock}
        position={[2.88, 0.66, -0.43]}
        scale={2.15}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_3.geometry}
        material={materials.crystal_blue}
        position={[4.69, 1.14, -0.51]}
        rotation={[0, -0.05, -0.29]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_2.geometry}
        material={materials.crystal_blue}
        position={[0.71, 4.61, -0.64]}
        rotation={[-0.02, -0.03, 0.3]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_1.geometry}
        material={materials.crystal_blue}
        position={[3.33, 1.31, -0.04]}
        rotation={[0.06, 0.01, -0.08]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_1001.geometry}
        material={materials.crystal_blue}
        position={[4.37, 1.21, -1.73]}
        rotation={[-0.29, 0, 0]}
        scale={0.82}
        castShadow
      />
    </group>
  );
}

useGLTF.preload("/assets/models/crystals-1-blue.glb");
