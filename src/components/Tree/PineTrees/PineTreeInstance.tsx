

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

// This is the path to your GLTF model
const GLTF_PATH = '/model/tree/PineTree.gltf';

// Preload the model to ensure it's cached
useGLTF.preload(GLTF_PATH);

/**
 * Renders 50 instanced PineTrees efficiently using InstancedMesh.
 */
 const  PineTreeInstance = ({ range = 100, ...props }) => {
    // 1. Load the GLTF and extract necessary data
    const { nodes, materials } = useGLTF(GLTF_PATH);

    // Assuming the GLTF structure provided:
    // The model consists of two meshes: the Wood (trunk) and the Green (leaves).
    const trunkGeometry = nodes.Resource_PineTree_Group_1.geometry;
    const leavesGeometry = nodes.Resource_PineTree_Group_2.geometry;

    const trunkMaterial = materials.Wood;
    const leavesMaterial = materials.Green;

  


    // 3. Render two InstancedMeshes (one for trunk, one for leaves)
    // InstancedMesh is the key to efficiency, as it batches draw calls on the GPU.
    return (
        <group {...props} dispose={null} scale={[70*4,150*4,70*4]} rotation={[-Math.PI/2,0,Math.PI/2]} position={[0,2,0]} >
            {/* Trunk InstancedMesh */}
            <instancedMesh
                args={[trunkGeometry, trunkMaterial,1]}
               
               
            />

            {/* Leaves InstancedMesh */}
            <instancedMesh
                args={[leavesGeometry, leavesMaterial,1]}
               
               
            />
        </group>
    );
}
export default PineTreeInstance