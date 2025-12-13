import * as THREE from "three"
import { Center, Float, Text3D } from "@react-three/drei"
const FONT_URL = "font/helvetik.json";
function Arrow3D({ props }) {
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
        <>

            <group {...props} rotation={[-Math.PI, 0, 0]} position={[0, 1, 0]}>
                <mesh scale={0.0025}>
                    <extrudeGeometry args={[shape, extrudeSettings]} />
                    <meshStandardMaterial color="#FFD700" />
                </mesh>

            </group>
            <group position={[-0.5, 1.1, 0]}>
                <Float>
                    <Text3D font={FONT_URL}
                        size={0.25}
                        height={0.05}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.01}
                        bevelSize={0.01}>Pressed</Text3D>
                </Float>
            </group>
        </>

    )
}

export default Arrow3D