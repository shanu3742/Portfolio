import React, { useRef, useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SPEED = 6
const JUMP_FORCE = 6

const Player = () => {
  // 1. Get access to the Rapier world and instance
  const { rapier, world } = useRapier()

  const [hitSound] = useState(() => new Audio('./mp3/footstep.mp3'))
  const [, getKeys] = useKeyboardControls()
  const body = useRef<RapierRigidBody | null>(null)
  const manRef = useRef(null)

  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()
  const cameraPosition = new THREE.Vector3()

  useFrame((state) => {
    if (!body.current) return

    const { forward, backward, leftward, rightward } = getKeys()
    const velocity = body.current.linvel()
    const translation = body.current.translation()

    // --- MOVEMENT ---
    frontVector.set(0, 0, backward - forward)
    sideVector.set(leftward - rightward, 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)

    body.current.setLinvel(
      { x: direction.x, y: velocity.y, z: direction.z },
      true
    )



    // --- ROTATION ---
    if (direction.length() > 0.1) {
      const angle = Math.atan2(direction.x, direction.z)
      body.current.setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 1, 0),
          angle
        ),
        true
      )
    }

    if (direction.length() > 0.1) {
      manRef.current?.play(AnimationNames.Walk)
    }
    // 3. Otherwise, Idle
    else {
      manRef.current?.play(AnimationNames.Idle)
    }

    // --- CAMERA ---

    // cameraPosition.copy(translation)
    // cameraPosition.y += 1.5
    // cameraPosition.z += 5
    // state.camera.position.lerp(cameraPosition, 0.1)
    // state.camera.lookAt(translation.x, translation.y + 1, translation.z)
  })

  // Keep sound logic on collision for impact sounds
  const playerHitGround = (event) => {
    if (event.other.rigidBodyObject?.name === 'ground') {
      playSound()
    }
  }

  const playSound = () => {
    hitSound.currentTime = 0
    hitSound.volume = Math.random()
    hitSound.play()
  }

  return (
    <RigidBody
      ref={body}
      colliders={'hull'}
      position={[1, 1, 1.2]}
      restitution={0}
      friction={1}
      mass={1}
      lockRotations
      onCollisionEnter={playerHitGround}
    >
      <Man scale={0.25} ref={manRef} />
    </RigidBody>
  )
}

export default Player