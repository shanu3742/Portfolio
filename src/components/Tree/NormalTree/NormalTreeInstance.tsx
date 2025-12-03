import { Merged, useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";
import { Instances, Instance } from "@react-three/drei";

export function NormalTreeModel() {
  const { nodes, materials } = useGLTF("/model/tree/NormalTree.gltf");

  return (
    <Merged
      meshes={{
        trunk: nodes.Cube,
        leaves: nodes.Icosphere003,
      }}
    >
      {(models) => (
        <group>
          <models.trunk
            rotation={[-Math.PI / 2, 0, 0]}
            scale={46.324}
          />
          <models.leaves
            position={[0.405, 6.347, -0.703]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={139.01}
          />
        </group>
      )}
    </Merged>
  );
}



export function NormalTreeInstances({ count = 100 }) {
  const positions = useMemo(() => {
    return [...Array(count)].map(() => [
      (Math.random() - 0.5) * 200,
      0,
      (Math.random() - 0.5) * 200
    ]);
  }, [count]);

  return (
    <Instances limit={count}>
      <NormalTreeModel />

      {positions.map((p, i) => (
        <Instance key={i} position={p} />
      ))}
    </Instances>
  );
}