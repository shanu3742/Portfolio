import React, { useMemo } from 'react'
import { Instances, Instance, useGLTF } from '@react-three/drei'
import * as d3 from 'd3'
const treesNormlized = [
    { "x": 0.031472, "z": 0.912346, "scale": 22 },
    { "x": 0.084295, "z": 0.634291, "scale": 27 },
    { "x": 0.129483, "z": 0.285194, "scale": 24 },
    { "x": 0.168394, "z": 0.749105, "scale": 29 },
    { "x": 0.213948, "z": 0.091483, "scale": 21 },
    { "x": 0.257491, "z": 0.512947, "scale": 26 },
    { "x": 0.293847, "z": 0.846102, "scale": 23 },
    { "x": 0.337592, "z": 0.163948, "scale": 30 },
    { "x": 0.374918, "z": 0.698234, "scale": 25 },
    { "x": 0.412857, "z": 0.374819, "scale": 28 },
  
    { "x": 0.456294, "z": 0.942384, "scale": 24 },
    { "x": 0.498346, "z": 0.058492, "scale": 20 },
    { "x": 0.529184, "z": 0.457392, "scale": 27 },
    { "x": 0.563947, "z": 0.791048, "scale": 22 },
    { "x": 0.607193, "z": 0.216304, "scale": 29 },
    { "x": 0.649281, "z": 0.563918, "scale": 25 },
    { "x": 0.684902, "z": 0.893204, "scale": 21 },
    { "x": 0.719483, "z": 0.152847, "scale": 30 },
    { "x": 0.754193, "z": 0.634918, "scale": 26 },
    { "x": 0.789239, "z": 0.318402, "scale": 23 },
  
    { "x": 0.812394, "z": 0.971384, "scale": 28 },
    { "x": 0.835918, "z": 0.047291, "scale": 24 },
    { "x": 0.857493, "z": 0.509482, "scale": 27 },
    { "x": 0.879143, "z": 0.781293, "scale": 21 },
    { "x": 0.903847, "z": 0.236948, "scale": 29 },
    { "x": 0.924193, "z": 0.684291, "scale": 25 },
    { "x": 0.945728, "z": 0.412943, "scale": 22 },
    { "x": 0.964291, "z": 0.874219, "scale": 30 },
    { "x": 0.982374, "z": 0.143829, "scale": 26 },
    { "x": 0.997183, "z": 0.547392, "scale": 23 }
  ]
  
export function NormalTreeInstanced() {
  const { nodes, materials } = useGLTF('/model/tree/NormalTree.gltf')
  const zScale  = d3.scaleLinear().domain([0,1]).range([-2,-50])
  const xScale  = d3.scaleLinear().domain([0,1]).range([-50,50])
  // ✅ SAME transform data shared by trunk & leaves
  
  const trees = useMemo(() => {
    return treesNormlized.map((tree) => {
      const x = xScale(tree.x)
      const z = zScale(tree.z)
      const scale = tree.scale
    //   const rotationY = Math.random() * Math.PI * 2

      return {
        position: [x, 0, z],
        scale,
      }
    })
  }, [])

  return (
    <>
      {/* ✅ TRUNK INSTANCES */}
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

      {/* ✅ LEAVES INSTANCES (OFFSET RELATIVE TO TRUNK) */}
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
