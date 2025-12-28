import * as THREE from "three"
export const Arrow = ({ scale = 1, color = '#FFD700', rotation = [-Math.PI, 0, 0], position = [0, 1, 0], props }) => {
    const shape = new THREE.Shape()

    shape.moveTo(70, 20)
    shape.lineTo(130, 20)
    shape.lineTo(130, 90)
    shape.lineTo(180, 90)
    shape.lineTo(100, 180)
    shape.lineTo(20, 90)
    shape.lineTo(70, 90)
    shape.closePath()
    const extrudeSettings = {
        depth: 20,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 2,
        bevelSegments: 3,
    }

    return (
        <group {...props} rotation={rotation} position={position}>
            <mesh scale={0.0025 * scale}>
                <extrudeGeometry args={[shape, extrudeSettings]} />
                <meshStandardMaterial color={color} />
            </mesh>

        </group>
    )
}