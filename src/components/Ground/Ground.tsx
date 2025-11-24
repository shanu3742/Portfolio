import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'
import { CuboidCollider, RigidBody } from '@react-three/rapier';
const Ground = () => {

    const textures = useTexture({
        dirt: "/texture/tree/dirt_albedo.png",
        grass: "/texture/tree/grass_albedo.png",
        grassNormal: "/texture/tree/grass_normal.png",
        grassRough: "/texture/tree/grass_roughness.png",
        path: "/texture/tree/path_albedo.png",
        pathNormal: "/texture/tree/path_normal.png",
        mask: "/texture/tree/splat_mask.png",
        height: "/texture/tree/terrain_height.png"
    })

    // Texture repeat settings
    useMemo(() => {
        Object.values(textures).forEach(tex => {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping

            const url = tex.source.data.src

            if (
                url.includes("albedo") ||
                url.includes("normal") ||
                url.includes("roughness") ||
                url.includes("path")
            ) {
                tex.repeat.set(10, 10)
            } else {
                tex.repeat.set(1, 1)  // height + mask
            }
        })
    }, [textures])

    return (
        <RigidBody type='fixed' colliders={false} restitution={0.2} friction={0} key={length}>
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[10, 10, 10]}
                castShadow
                receiveShadow
            >
                {/* 512 segments gives smooth hills */}
                <planeGeometry args={[10, 10, 512, 512]} />

                <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                        uDirt: { value: textures.dirt },
                        uGrass: { value: textures.grass },
                        uGrassNormal: { value: textures.grassNormal },
                        uGrassRough: { value: textures.grassRough },
                        uPath: { value: textures.path },
                        uPathNormal: { value: textures.pathNormal },
                        uMask: { value: textures.mask },
                        uHeightMap: { value: textures.height },

                        // Fog
                        fogColor: { value: new THREE.Color("#cfe3ff") },
                        fogDensity: { value: 0.08 },
                    }}
                />
            </mesh>
            <CuboidCollider
                args={[5*10, 0.1, 5*10]}           // half sizes for 10×10 ground
                position={[0, 3, 0]}      // perfectly aligned
                restitution={0.2}
                friction={1}
            />
        </RigidBody>
    )
}

export default Ground

// -------------------------------------------------------------
// --------------------- VERTEX SHADER --------------------------
// -------------------------------------------------------------
const vertexShader = `
uniform sampler2D uHeightMap;

varying vec2 vUv;
varying float vFogDepth;

void main() {
    vUv = uv;

    float heightValue = texture2D(uHeightMap, uv).r;
    float heightScale = 0.5;

    vec3 newPosition = position;
    newPosition.z += heightValue * heightScale;

    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    vFogDepth = -mvPosition.z;

    gl_Position = projectionMatrix * mvPosition;
}
`;

// -------------------------------------------------------------
// -------------------- FRAGMENT SHADER -------------------------
// -------------------------------------------------------------
const fragmentShader = `
uniform sampler2D uDirt;
uniform sampler2D uGrass;
uniform sampler2D uGrassNormal;
uniform sampler2D uGrassRough;
uniform sampler2D uPath;
uniform sampler2D uPathNormal;
uniform sampler2D uMask;

// Fog uniforms
uniform vec3 fogColor;
uniform float fogDensity;

varying vec2 vUv;
varying float vFogDepth;

void main() {

    vec4 mask = texture2D(uMask, vUv);

    vec4 dirt = texture2D(uDirt, vUv * 5.0);
    vec4 grass = texture2D(uGrass, vUv * 10.0);
    vec4 path = texture2D(uPath, vUv * 6.0);

    vec4 color =
          dirt * mask.r +
          grass * mask.g +
          path * mask.b;

    // ---- EXPONENTIAL FOG ----
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);

    vec3 finalColor = mix(color.rgb, fogColor, fogFactor);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;
