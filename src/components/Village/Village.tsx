import React from 'react'
import { PoorHouse } from '../House/PoorHouse/PoorHouse'
import { Temple } from '../Temple/Temple'
import { ClassicalHouse } from '../House/PoorHouse/ClassicalHouse'
import { Grass } from '../Grass/Grass'

const Village = () => {
    return (
        <>
            <PoorHouse scale={[2, 2, 1]} position={[-7, 2.5, 1]} />
            <PoorHouse scale={[2, 2, 1]} position={[-12, 2.5, 3]} rotation={[0, Math.PI, 0]} />
            <group scale={[0.1, 0.1, 0.1]} position={[4, 3.75, 7]} rotation={[0, Math.PI, 0]} >
                <Grass scale={[5 * 3, 5 * 3, 5 * 3]} position={[15, -5, 1]} />
                <Grass scale={[5 * 3, 5 * 3, 5 * 3]} position={[15, -5, -6]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[17, -8, -6]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[17, -8, 2]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[17, -8, 8]} />
                <Grass scale={[5 * 2, 5 * 2, 5 * 2]} position={[5, -8, -6]} />
                <Temple />
            </group>
            <group>
                <Grass scale={[1.5, 1.5, 1.5]} position={[-3, 3, 7.5]} />
                <ClassicalHouse scale={[0.00025 * 5, 0.00025 * 5, 0.00025 * 5]} position={[-3, 3, 7]} />
            </group>

        </>
    )
}

export default Village
