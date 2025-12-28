import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function ClassicalHouse(props) {
    const { nodes, materials } = useGLTF('/model/House/PoorHouse/Chalet.glb')
    return (

        <group {...props} dispose={null}>
            <RigidBody type='fixed' colliders='cuboid'>
                <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials.MAIN} />
            </RigidBody>
        </group>
    )
}

useGLTF.preload('/model/House/PoorHouse/Chalet.glb')
