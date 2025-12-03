import React, { useMemo } from 'react'
import { Instances, Instance, useGLTF } from '@react-three/drei'
import * as d3 from 'd3'
import palmTrees from '../../../setting/palmTree.json'



const  PalmTreeInstance = ({scaleIndex=1}) =>  {
  const scale = useMemo(() =>[4*scaleIndex, 8*scaleIndex, 4*scaleIndex],[scaleIndex] )
      const { nodes:palmNodes, materials:palmMaterial} = useGLTF('/model/tree/PalmTree.gltf');
      const { nodes:pineNodes, materials:pineMaterial } = useGLTF('/model/tree/PineTree.gltf')
      const zScale  = d3.scaleLinear().domain([0,1]).range([-2,-50])
      const xScale  = d3.scaleLinear().domain([0,1]).range([-50,50])
      // ✅ SAME transform data shared by trunk & leaves
      
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


      console.log('trees',trees)
    return (
      <>
        <>  
            {/*Tree Tail*/}
                <Instances
                  geometry={pineNodes.Resource_PineTree_Group_1.geometry}
                  material={pineMaterial.Wood}
                >
                  {trees.map((tree, i) => (
                    <Instance
                      key={i}
                      position={[
                          tree.position[0],  
                          tree.position[1],
                          tree.position[2],
                        ]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={[10*20,10*30,10*20]}
                    />
                  ))}
                </Instances>
          
                {/*Pine Head*/}
                <Instances
                  geometry={pineNodes.Resource_PineTree_Group_2.geometry}
                  material={pineMaterial.Green}
                >
                  {trees.map((tree, i) => (
                    <Instance
                      key={i}
                      position={[
                        tree.position[0],   // ✅ SAME OFFSET AS GLTF
                        tree.position[1],
                        tree.position[2],
                      ]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={[10*20,10*30,10*20]}
                    />
                  ))}
                </Instances>
        </>
        <Instances
          limit={palmTrees.length}
          geometry={palmNodes.Environment_PalmTree_3.geometry}
          material={palmMaterial.Atlas}
        >
          {trees.map((tree, i) => {
            return <Instance key={i} position={tree.position} scale={scale} />
          })}
        </Instances>
      </>
    );
  }


  export default PalmTreeInstance
  