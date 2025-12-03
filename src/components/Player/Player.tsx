import React, { useEffect, useRef, useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { CapsuleCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SPEED = 6
const JUMP_FORCE = 7

const Player = () => {
  const [hitSound] = useState(() => new Audio('./mp3/footstep.mp3'))

  const [, getKeys] = useKeyboardControls()
  const body = useRef<RapierRigidBody | null>(null)
  const manRef = useRef(null)

  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()

  // ✅ MAIN MOVEMENT LOOP (CORRECT WAY)
  useFrame(() => {
    if (!body.current) return

    const { forward, backward, leftward, rightward, jump } = getKeys()
    const velocity = body.current.linvel()

    // ✅ Build direction
    frontVector.set(0, 0, backward - forward)
    sideVector.set(leftward - rightward, 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)

    // ✅ Apply movement (preserve gravity)
    body.current.setLinvel(
      { x: direction.x, y: velocity.y, z: direction.z },
      true
    )

    // ✅ Jump (grounded check)
    if (jump && Math.abs(velocity.y) < 0.05) {
      body.current.applyImpulse({ x: 0, y: JUMP_FORCE, z: 0 }, true)
    }

    // ✅ Rotate player toward movement
    if (direction.length() > 0.1) {
      const angle = Math.atan2(direction.x, direction.z)
      body.current.setRotation(
        new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 1, 0),
          angle
        ),
        true
      )
      manRef.current?.play(AnimationNames.Walk)
    } else {
      manRef.current?.play(AnimationNames.Idle)
    }
  })

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
      position={[0, 10, 5]}
      restitution={0}
      friction={1}
      mass={1}
      lockRotations
      onCollisionEnter={playerHitGround}
    >
      {/* ✅ Correct capsule for player */}
      {/* <CapsuleCollider args={[0.3, 0.35]} /> */}

      <Man scale={0.25} ref={manRef} />
    </RigidBody>
  )
}

export default Player
