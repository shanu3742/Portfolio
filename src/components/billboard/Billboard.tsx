import { useGLTF } from '@react-three/drei'

export function BillBoardSkeleton(props) {
  const { nodes, materials } = useGLTF('/model/billboard/billboard.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        position={[1.847, 8.655, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.786, 2.716, 8.615]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.cabo}
        position={[1.742, 8.625, -0.055]}
        scale={[0.073, 4.184, 9.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.cabo}
        position={[-0.035, 4.021, 4.794]}
        scale={[1, 0.107, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.cabo}
        position={[-0.001, 4.167, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.cabo}
        position={[0, 0.837, -4.887]}
        scale={[0.57, 2.653, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.cabo}
        position={[-0.035, 4.021, -4.872]}
        scale={[1, 0.107, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.cabo}
        position={[-1.068, 8.669, -8.789]}
        scale={[0.21, 4.621, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.cabo}
        position={[1.073, 8.669, -8.791]}
        scale={[0.21, 4.621, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.cabo}
        position={[1.073, 8.669, 8.799]}
        scale={[0.21, 4.621, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.cabo}
        position={[-1.068, 8.669, 8.801]}
        scale={[0.21, 4.621, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.cabo}
        position={[-1.068, 13.462, 0.068]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.21, 9.074, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.cabo}
        position={[-1.068, 7.233, 0.068]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.21, 9.074, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.cabo}
        position={[-1.068, 10.546, 0.068]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.21, 9.074, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.cabo}
        position={[1.441, 4.255, -8.791]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.21, 0.579, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.cabo}
        position={[1.441, 4.255, 8.798]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.21, 0.579, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.cabo}
        position={[0.021, 7.231, -8.791]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.207, 1.268, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.cabo}
        position={[0.021, 10.544, -8.791]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.207, 1.268, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.cabo}
        position={[0.021, 13.462, -8.791]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.207, 1.268, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.cabo}
        position={[0.021, 13.467, 8.797]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.207, 1.268, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.cabo}
        position={[0.021, 10.547, 8.797]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.207, 1.268, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.cabo}
        position={[0.021, 7.227, 8.797]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.207, 1.268, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.cabo}
        position={[-0.488, 1.064, -5.952]}
        scale={[0.083, 2.997, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.cabo}
        position={[0.495, 1.064, -5.959]}
        scale={[0.083, 2.997, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.cabo}
        position={[0.004, 0.884, -5.952]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.083, 0.564, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials.cabo}
        position={[0.494, -0.265, -5.318]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.083, 0.666, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.cabo}
        position={[-0.487, -0.265, -5.318]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.083, 0.666, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials.cabo}
        position={[0.004, 1.995, -5.952]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.083, 0.564, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.cabo}
        position={[0.004, 3.078, -5.952]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.083, 0.564, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_60.geometry}
        material={materials.cabo}
        position={[0.004, -0.251, -5.952]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.083, 0.564, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials.cabo}
        position={[0.004, -1.245, -5.952]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.083, 0.564, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials.cabo}
        position={[-0.487, 2, -5.318]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.083, 0.666, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials.cabo}
        position={[0.494, 2, -5.318]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.083, 0.666, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.cabo}
        position={[0, 0.837, 4.865]}
        scale={[0.57, 2.653, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials.pilar}
        position={[4.657, 0, 0]}
        rotation={[1.915, 0.723, -0.96]}
      />
    </group>
  )
}

useGLTF.preload('/billboard.gltf')



