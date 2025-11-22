import React, { useMemo } from 'react'
import { PineTree } from '../Tree/PineTrees/PineTrees'
import { RigidBody } from '@react-three/rapier'
import { PalmTree } from '../Tree/PalmTrees/PalmTrees';
import { NormalTree } from '../Tree/NormalTree/NormalTree';

// --- Configuration ---
const NUMBER_OF_TREES = 50; // You can set this to any high number
const NUMBER_OF_NORMAL_TREES = 50;
const FIXED_Y = 2; // Fixed height (y value)
const SCALE = [2, 3, 2]; // Fixed scale for all trees
const NormalTreeSCALE = [0.5, 0.5, 0.5];

// Define the boundaries for random generation
// Z will be less than -1, so we set a range from Z_MIN to Z_MAX (-1)
const X_MIN = -50;
const X_MAX = 50;
const Z_MIN = -50; // Deepest part of the forest
const Z_MAX = -1; // Closest part of the forest (less than -1)

// --- Helper Function ---
/**
 * Generates an array of random [x, y, z] positions.
 */
const generateRandomPositions = (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
        // Generate a random number between X_MIN and X_MAX
        const randomX = Math.random() * (X_MAX - X_MIN) + X_MIN;

        // Generate a random number between Z_MIN and Z_MAX
        const randomZ = Math.random() * (Z_MAX - Z_MIN) + Z_MIN;

        // Push the [x, y, z] coordinate
        positions.push([randomX, FIXED_Y, randomZ]);
    }
    return positions;
};

const generateNormalRandomPositions = (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
        // Generate a random number between X_MIN and X_MAX
        const randomX = Math.random() * (X_MAX - X_MIN) + X_MIN;

        // Generate a random number between Z_MIN and Z_MAX
        const randomZ = Math.random() * (Z_MAX - Z_MIN) + Z_MIN;

        // Push the [x, y, z] coordinate
        positions.push([randomX, FIXED_Y, randomZ]);
    }
    return positions;
};

// --- Component ---
const Garden = () => {
    // 1. Use useMemo to generate the positions only once when the component mounts.
    // This prevents re-calculating thousands of coordinates on every re-render.
    const treePositions = useMemo(() => generateRandomPositions(NUMBER_OF_TREES), []);
    const normalTreePositions = useMemo(() => generateNormalRandomPositions(NUMBER_OF_NORMAL_TREES), []);

    return (
        <>
            {/* Note: Using a single RigidBody around ALL trees might cause performance issues
              for the physics engine with thousands of colliders.
              For static/fixed objects like this, you might consider using an 
              <InstancedRigidBody> or wrapping each tree in its own <RigidBody>.
              For this example, we keep the single wrapper as you had it, but be mindful 
              of performance. The key prop is no longer needed on RigidBody here.
            */}
            <RigidBody type='fixed' colliders="cuboid" restitution={0.2} friction={1}>
                {/* 2. Map over the large array to render all trees */}
                <>
                    {treePositions.map((position, index) => (
                        <group
                            key={index}
                            position={position} // [randomX, FIXED_Y, randomZ]
                            scale={SCALE}
                        >
                            <PalmTree />
                        </group>
                    ))}
                </>
                <>
                    {normalTreePositions.map((position, index) => (
                        <group
                            key={index}
                            position={position} // [randomX, FIXED_Y, randomZ]
                            scale={NormalTreeSCALE}
                        >
                            <NormalTree />
                        </group>
                    ))}
                </>

            </RigidBody >
        </>
    )
}

export default Garden