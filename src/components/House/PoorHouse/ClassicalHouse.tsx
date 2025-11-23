import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ClassicalHouse(props) {
    const { nodes, materials } = useGLTF('/model/House/PoorHouse/Chalet.glb')
    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials.MAIN} />
        </group>
    )
}

useGLTF.preload('/model/House/PoorHouse/Chalet.glb')
