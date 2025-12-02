import React, { useMemo } from 'react'
import { Instances, Instance, useGLTF } from '@react-three/drei'

const  PalmTreeInstance = ({count=100,scale=[2, 3, 2]}) =>  {
    const { nodes, materials } = useGLTF('/model/tree/PalmTree.gltf');
    return (
      <Instances
        limit={count}
        geometry={nodes.Environment_PalmTree_3.geometry}
        material={materials.Atlas}
      >
        {Array.from({ length: count }).map((_, i) => {
          const x = Math.random() * 100 - 50;
          const z = Math.random() * -50;
          return <Instance key={i} position={[x, 2, z]} scale={scale} />
        })}
      </Instances>
    );
  }


  export default PalmTreeInstance
  