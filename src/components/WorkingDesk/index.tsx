import { Chair } from "../Chair/Index";
import { CameraMover } from "../../animation/camera/DirectionCameraAnimation/DirectionCameraAnimation";
import { Center, Html, useGLTF } from "@react-three/drei";


const WorkingDesk = () => {
    const cameraTarget: [number, number, number] = [0, 1.5, 3];

    const chairPosition = {
        x: -0.1,
        y: -0.17,
        z: 1.25
    }

    const { scene } = useGLTF('./model/mac.gltf')
    const { scene: table } = useGLTF('./model/table.gltf')
    const { scene: cup } = useGLTF('./model/cup.gltf')

    return (
        <>
            <CameraMover targetPosition={cameraTarget} />
            <group position-y={0.525}>
                <group rotation-y={Math.PI / 2}>
                    <Center>
                        <primitive object={table} />
                    </Center>
                </group>
                <group scale={0.35} position-y={0.4}>
                    <rectAreaLight width={2.5} height={1.65} intensity={65} color={'gray'} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                    <primitive object={scene} >
                        <Html occlude transform wrapperClass="html-screen" distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                            <iframe src="./portfolio/shanu.portfolio.html" />
                        </Html>
                    </primitive>
                </group>
                <group position-y={0.6} position-x={-0.9} position-z={0.35} >
                    <Center>
                        <primitive object={cup} />
                    </Center>
                </group>

                <group position={[chairPosition.x, chairPosition.y, chairPosition.z]} rotation={[0, Math.PI, 0]}>
                    <Chair />
                </group>
            </group>

        </>
    )
}
export default WorkingDesk