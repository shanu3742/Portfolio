import React from 'react'
import { PoorHouse } from '../House/PoorHouse/PoorHouse'
import { Temple } from '../Temple/Temple'
import { ClassicalHouse } from '../House/PoorHouse/ClassicalHouse'
import { Grass } from '../Grass/Grass'
import { RigidBody } from '@react-three/rapier'

const Village = () => {
    return (
        <>
            <RigidBody type='fixed'>
                <PoorHouse scale={[4, 4, 2]} position={[-9, 0.2, -2]} />
            </RigidBody>
            <RigidBody type='fixed'>
                <PoorHouse scale={[4, 4, 1]} position={[-16, 0.5, 4.5]} rotation={[0, Math.PI, 0]} />
            </RigidBody>

            <group scale={[0.1, 0.1, 0.1]} position={[4, 1.2, 7]} rotation={[0, Math.PI, 0]} >
                <Grass scale={[5 * 3, 5 * 3, 5 * 3]} position={[15, -5, 1]} />
                <Grass scale={[5 * 3, 5 * 3, 5 * 3]} position={[15, -5, -6]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[17, -8, -6]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[17, -8, 2]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[17, -8, 8]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[5, -8, -6]} />
                <RigidBody type='fixed'>
                    <Temple scale={[2, 2, 2]} position={[0, 7.5, 0]} />
                </RigidBody>

            </group>
            <group>
                <Grass scale={[4, 4, 4]} position={[-3, 0.7, 8.5]} />
                <ClassicalHouse scale={[0.00025 * 15, 0.00025 * 15, 0.00025 * 15]} position={[-3, 0.85, 7]} />
            </group>

        </>
    )
}

export default Village
