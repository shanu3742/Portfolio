
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { PineTree } from '../PineTrees/PineTrees'

export function PalmTree(props) {
  const { nodes, materials } = useGLTF('/model/tree/PalmTree.gltf')
  return (
    <>
      <PineTree />
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Environment_PalmTree_3.geometry}
          material={materials.Atlas}
          scale={100}
        />
      </group>
    </>
  )
}

useGLTF.preload('/model/tree/PalmTree.gltf')