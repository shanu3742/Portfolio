import Annotation from '../Annotation/Annotation';
import { BillBoardSkeleton } from '../billboard/Billboard';
import PageView from '../view/PageView';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

const BilBoard = () => {


    return (

        <group position={[6, 0, 0]} rotation={[0, 0, 0]}>
            <RigidBody type='fixed' colliders={'cuboid'} position={[0, 0, 0]}  >
                <BillBoardSkeleton position={[10,0.25,0]} scale={0.3} rotation={[0,-Math.PI/2,0]} />
                <Annotation distanceFactor={2} position={[10,3,0.56]}>

                    <PageView
                        key={'hero'}
                        pageName={'hero'}
                    />


                </Annotation>

            </RigidBody>
        
        </group >

    );
};

export default BilBoard;
