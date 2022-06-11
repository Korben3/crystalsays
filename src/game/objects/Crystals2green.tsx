import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import tone2 from "../assets/tone-2.mp3";
import useSound from "use-sound";

type GLTFResult = GLTF & {
  nodes: {
    rock003: THREE.Mesh;
    crystal_3: THREE.Mesh;
    crystal_2: THREE.Mesh;
    crystal_1: THREE.Mesh;
    crystal_1001: THREE.Mesh;
  };
  materials: {
    ["rock.001"]: THREE.MeshStandardMaterial;
    ["crystal_blue.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Crystals2green({ ...props }: JSX.IntrinsicElements["group"] & { selected: boolean }) {
  const [play] = useSound(tone2);

  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/assets/models/crystals-2-green.glb") as GLTFResult;

  useEffect(() => {
    if (props.selected) {
      play();
    }
  }, [play, props.selected]);

  return (
    <group ref={group} {...props} dispose={null}>
      {props.selected && (
        <>
          <pointLight position={[3, 7, -1.5]} color="#34bf42" intensity={10} distance={7} />
          <Sparkles position={[2.5, 4, -1.5]} size={2} scale={4.5} color="#34bf42" noise={[2, 3, 2]} />
        </>
      )}
      <mesh
        geometry={nodes.rock003.geometry}
        material={materials["rock.001"]}
        position={[3.18, 1.11, -0.53]}
        scale={2.2}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_3.geometry}
        material={materials["crystal_blue.001"]}
        position={[4.68, 1.62, -0.72]}
        rotation={[0, -0.43, -0.29]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_2.geometry}
        material={materials["crystal_blue.001"]}
        position={[1.55, 5.3, -0.83]}
        rotation={[-0.02, -0.03, 0.3]}
        scale={1.32}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_1.geometry}
        material={materials["crystal_blue.001"]}
        position={[3.29, 1.07, 1.21]}
        rotation={[0.06, 0.01, -0.08]}
        castShadow
      />
      <mesh
        geometry={nodes.crystal_1001.geometry}
        material={materials["crystal_blue.001"]}
        position={[4.43, 0.96, -1.83]}
        rotation={[-0.29, 0, 0]}
        scale={0.82}
        castShadow
      />
    </group>
  );
}

useGLTF.preload("/assets/models/crystals-2-green.glb");
