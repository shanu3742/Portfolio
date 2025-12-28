import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as d3 from 'd3'
import { InstancedRigidBodies } from '@react-three/rapier'
import * as THREE from 'three' // Needed for Vector3 and potential Matrix4 usage

import classicHouses from '../../../setting/classicHouse.json'

const ClassicHouseInstance = ({ scaleIndex = 1 }) => {

    const { nodes, materials } = useGLTF('/model/House/PoorHouse/Chalet.glb');


    const zScale = d3.scaleLinear().domain([0, 1]).range([4, 15])
    const xScale = d3.scaleLinear().domain([0, 1]).range([-50, 50])


    const instanceScale = 0.001 * 4;


    const colliderScale = useMemo(() => new THREE.Vector3(instanceScale, instanceScale, instanceScale), [instanceScale]);


    const houseListTransforms = useMemo(() => {
        return classicHouses.map((house) => {
            const x = xScale(house.x)
            const z = zScale(house.z)

            // InstancedRigidBodies accepts an object with position, rotation, and scale.
            return {
                position: [x, 1, z],
                scale: colliderScale, // Apply the scale to the physics collider
                // rotation: [0, rotationY, 0] // Add rotation if needed
            }
        })
    }, [colliderScale])

    // Get the geometry and material references
    const geometry = nodes.Node.geometry;
    const material = materials.MAIN;

    if (!geometry || !material) return null; // Safety check

    return (
        <InstancedRigidBodies
            type='fixed'
            instances={houseListTransforms}
        >
            <instancedMesh
                args={[geometry, material, classicHouses.length]}
            />
        </InstancedRigidBodies>
    );
}

// Preload the model to avoid pop-in effects
useGLTF.preload('/model/House/PoorHouse/Chalet.glb');

export default ClassicHouseInstance;