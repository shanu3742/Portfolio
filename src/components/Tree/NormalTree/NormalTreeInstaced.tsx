import React, { useMemo } from 'react'
import { Instances, Instance, useGLTF } from '@react-three/drei'
import * as d3 from 'd3'
import  normalTress  from '../../../setting/normaltree.json'
  
export function NormalTreeInstanced() {
  const { nodes, materials } = useGLTF('/model/tree/NormalTree.gltf')
  const zScale  = d3.scaleLinear().domain([0,1]).range([-2,-50])
  const xScale  = d3.scaleLinear().domain([0,1]).range([-50,50])
 
  
  const trees = useMemo(() => {
    return normalTress.map((tree) => {
      const x = xScale(tree.x)
      const z = zScale(tree.z)
      const scale = 24;
      return {
        position: [x, 0, z],
        scale,
      }
    })
  }, [])

  return (
    <>
      {/*Tree Tail*/}
      <Instances
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        castShadow
        receiveShadow
      >
        {trees.map((tree, i) => (
          <Instance
            key={i}
            position={[
                tree.position[0],   // ✅ SAME OFFSET AS GLTF
                tree.position[1] + 1,
                tree.position[2],
              ]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={tree.scale}
          />
        ))}
      </Instances>

      {/*Tree Head*/}
      <Instances
        geometry={nodes.Icosphere003.geometry}
        material={materials['Material.001']}
        castShadow
        receiveShadow
      >
        {trees.map((tree, i) => (
          <Instance
            key={i}
            position={[
              tree.position[0] + 0.405,   // ✅ SAME OFFSET AS GLTF
              tree.position[1] + 4,
              tree.position[2] - 0.703,
            ]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={tree.scale * 3}
          />
        ))}
      </Instances>
    </>
  )
}

useGLTF.preload('/model/tree/NormalTree.gltf')
