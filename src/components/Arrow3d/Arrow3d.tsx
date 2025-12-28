
import { Float, Text3D } from "@react-three/drei"
import { Arrow } from "../Arrow/Arrow";
const FONT_URL = "font/helvetik.json";
function Arrow3D() {



    return (
        <>

            <Arrow rotation={[-Math.PI, 0, 0]} position={[0, 1, 0]} />
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

