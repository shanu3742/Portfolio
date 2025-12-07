import Annotation from '../Annotation/Annotation';
import PageView from '../view/PageView';
import { RigidBody } from '@react-three/rapier';

const BilBoard = () => {


    return (
        <RigidBody type='fixed'>
            <group position={[6, 3, 0]} rotation={[0, 0, 0]}>
                <Annotation distanceFactor={2}>

                    <PageView
                        key={'hero'}
                        pageName={'hero'}
                    />


                </Annotation>
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


            </group >
        </RigidBody>
    );
};

export default BilBoard;
