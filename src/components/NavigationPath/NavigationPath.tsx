import React from 'react'
import { Arrow } from '../Arrow/Arrow'

const NavigationPath = () => {
    return (
        <>
            {/*toward left  direction  from center*/}
            <Arrow position={[-3, 0.05, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" />
            {/* <Arrow position={[-8, 0.2, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" /> */}
            <Arrow position={[-13, 0.3, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" />
            {/* <Arrow position={[-18, 0.5, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" /> */}
            <Arrow position={[-22, 0.45, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" />
            {/* <Arrow position={[-25, 0.5, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" /> */}
            {/* <Arrow position={[-27, 0.5, 1]} rotation={[Math.PI / 2, 0, Math.PI / 3]} scale={3} color="#C2B280" /> */}
            <Arrow position={[-31, -0.16, 3]} rotation={[Math.PI / 2, 0, Math.PI / 3]} scale={3} color="#C2B280" />
            <Arrow position={[-30, 0.3, -1.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" />
            <Arrow position={[-35, 0.8, -3]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3} color="#C2B280" />


            {/*toward right  direction  from center*/}

            <Arrow position={[5, -0.1, -0.5]} rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} scale={3} color="#C2B280" />

            <Arrow position={[12, 0.15, -0.5]} rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} scale={3} color="#C2B280" />
            <Arrow position={[5, -0.35, -2]} rotation={[Math.PI / 2, Math.PI, Math.PI * 0.7]} scale={3} color="#C2B280" />
            <Arrow position={[8, -0.15, -5]} rotation={[Math.PI / 2, Math.PI, Math.PI * 0.7]} scale={3} color="#C2B280" />
            <Arrow position={[18, 0.55, -0.5]} rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} scale={3} color="#C2B280" />
        </>
    )
}

export default NavigationPath