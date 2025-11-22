import React from 'react'
import { PoorHouse } from '../House/PoorHouse/PoorHouse'

const Village = () => {
    return (
        <>
            <PoorHouse scale={[2, 2, 1]} position={[-7, 2.5, 1]} />
            <PoorHouse scale={[2, 2, 1]} position={[-12, 2.5, 3]} rotation={[0, Math.PI, 0]} />
        </>
    )
}

export default Village
