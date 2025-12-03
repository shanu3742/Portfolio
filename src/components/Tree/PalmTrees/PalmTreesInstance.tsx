import React, { useMemo } from 'react'
import { Instances, Instance, useGLTF } from '@react-three/drei'

const  PalmTreeInstance = ({count=100,scaleIndex=1}) =>  {
  const scale = useMemo(() =>[4*scaleIndex, 8*scaleIndex, 4*scaleIndex],[scaleIndex] )
    const { nodes, materials } = useGLTF('/model/tree/PalmTree.gltf');
    console.log('node',nodes);
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
  