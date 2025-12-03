import React, { useMemo } from 'react'
import { Instances, Instance, useGLTF } from '@react-three/drei'
import * as d3 from 'd3'
import palmTrees from '../../../setting/palmTree.json'



const  PalmTreeInstance = ({scaleIndex=1}) =>  {
  const scale = useMemo(() =>[4*scaleIndex, 8*scaleIndex, 4*scaleIndex],[scaleIndex] )
      const { nodes, materials } = useGLTF('/model/tree/PalmTree.gltf');
      const zScale  = d3.scaleLinear().domain([0,1]).range([-2,-50])
      const xScale  = d3.scaleLinear().domain([0,1]).range([-50,50])
      
      // tree position calculation
      const trees = useMemo(() => {
        return palmTrees.map((tree) => {
          const x = xScale(tree.x)
          const z = zScale(tree.z)
        //   const rotationY = Math.random() * Math.PI * 2
    
          return {
            position: [x, 2, z],
          }
        })
      }, [])


    return (
      <Instances
        limit={palmTrees.length}
        geometry={nodes.Environment_PalmTree_3.geometry}
        material={materials.Atlas}
      >
        {trees.map((tree, i) => {
          return <Instance key={i} position={tree.position} scale={scale} />
        })}
      </Instances>
    );
  }


  export default PalmTreeInstance
  