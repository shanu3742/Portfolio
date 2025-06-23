import { Center, Html } from '@react-three/drei';
import CodeViewer from '../CodeViewer/CodeViewer';


const CodeBoard = () => {




    return (
        <group position={[6, 0, -3.5]}>
            <Center>
                {/* Group both Html and board */}
                <group position={[0, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
                    {/* HTML iframe */}
                    <Html
                        style={{ pointerEvents: 'none' }}
                        transform
                        wrapperClass="html-screen"
                        distanceFactor={1.6}
                        position={[0, 0, 0]} // Slightly in front
                    >
                        <CodeViewer />
                    </Html>

                    {/* Billboard behind HTML */}
                    <group position={[0, 0, -0.01]}>


                        <mesh>
                            <planeGeometry args={[4, 2.8]} />
                            <meshStandardMaterial color="#ffffff" />
                        </mesh>
                        {/* Legs */}
                        <mesh position={[-1, -1.55, -0.05]}>
                            <boxGeometry args={[0.1, 0.5, 0.1]} />
                            <meshStandardMaterial color="#555555" />
                        </mesh>
                        <mesh position={[1, -1.55, -0.05]}>
                            <boxGeometry args={[0.1, 0.5, 0.1]} />
                            <meshStandardMaterial color="#555555" />
                        </mesh>
                    </group>
                </group>
            </Center>
        </group>
    );
};

export default CodeBoard;
