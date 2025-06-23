import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

type CameraMoverProps = {
    targetPosition: [number, number, number]
    duration?: number // in seconds
}

export function CameraMover({ targetPosition, duration = 1.5 }: CameraMoverProps) {
    const { camera } = useThree()

    useEffect(() => {
        const start = new THREE.Vector3().copy(camera.position)
        const end = new THREE.Vector3(...targetPosition)
        const clock = new THREE.Clock()
        let animationFrameId: number

        const animate = () => {
            const elapsed = clock.getElapsedTime()
            const t = Math.min(elapsed / duration, 1) // normalize time
            camera.position.lerpVectors(start, end, t)

            // Optional: lookAt fixed point (e.g., origin)
            // camera.lookAt(0, 0, 0)

            if (t < 1) {
                animationFrameId = requestAnimationFrame(animate)
            }
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrameId)
    }, [])

    return null
}
