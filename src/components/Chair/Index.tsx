
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
    const { nodes, materials } = useGLTF('/model/chair.glb')
    return (
        <group {...props} dispose={null}>
            <group name="Root_Scene">
                <group name="RootNode" userData={{ name: 'RootNode' }}>
                    <mesh
                        name="ExecutiveChair1"
                        castShadow
                        receiveShadow
                        geometry={nodes.ExecutiveChair1.geometry}
                        material={materials.LeatherExecutiveChair1}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                        userData={{ name: 'ExecutiveChair1' }}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/model/chair.glb')
