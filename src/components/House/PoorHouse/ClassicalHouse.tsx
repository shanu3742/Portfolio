
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function ClassicalHouse(props: any) {
    const { nodes, materials } = useGLTF('/model/House/PoorHouse/Chalet.glb') as any
    return (

        <group {...props} dispose={null}>
            <RigidBody type='fixed' colliders='cuboid'>
                <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials.MAIN} />
            </RigidBody>
        </group>
    )
}

useGLTF.preload('/model/House/PoorHouse/Chalet.glb')
