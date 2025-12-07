import Annotation from '../Annotation/Annotation';
import PageView from '../view/PageView';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

const BilBoard = () => {


    return (

        <group position={[6, 3, 0]} rotation={[0, 0, 0]}>
            <RigidBody type='fixed' colliders={false} position={[0, 0, 0]}  >
                <Annotation distanceFactor={2}>

                    <PageView
                        key={'hero'}
                        pageName={'hero'}
                    />


                </Annotation>
                <CuboidCollider
                    args={[2.5, 0.1, 1.3]}
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </RigidBody>
            <RigidBody type='fixed' >
                <group position={[0, 0, -0.01]}>
                    <mesh position={[-2, -4, -0.05]}>
                        <boxGeometry args={[0.1, 8, 0.1]} />
                        <meshStandardMaterial color="#555555" />
                    </mesh>

                    <mesh position={[2, -4, -0.05]}>
                        <boxGeometry args={[0.1, 8, 0.1]} />
                        <meshStandardMaterial color="#555555" />
                    </mesh>
                </group>
            </RigidBody>



        </group >

    );
};

export default BilBoard;
