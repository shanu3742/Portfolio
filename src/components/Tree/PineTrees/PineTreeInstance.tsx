
import { Instances, Instance, useGLTF } from '@react-three/drei'
const PineTreeInstance = ({count=100,scale=[2, 3, 2]}) =>  {
    const { nodes, materials } = useGLTF('/model/tree/PineTree.gltf');
    return (
      <Instances
        limit={count}
        geometry={nodes.Resource_PineTree_Group_1.geometry}
        material={materials.Wood}
      >
        {Array.from({ length: count }).map((_, i) => {
          const x = Math.random() * 100 - 50;
          const z = Math.random() * -50;
          return <Instance key={i} position={[x, 2, z]} scale={[0.5, 0.5, 0.5]} />
        })}
      </Instances>
    );
  }

  export default PineTreeInstance