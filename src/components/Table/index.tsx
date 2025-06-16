
import { useGLTF } from "@react-three/drei";

export function Table() {
  const { nodes, materials } = useGLTF("/model/table.glb");
  return (
    <group dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������001_����������������_0"].geometry}
          material={materials.material}
          position={[-162.603, 99.998, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/table.glb");
