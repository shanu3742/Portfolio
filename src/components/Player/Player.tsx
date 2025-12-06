import React, { useRef, useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SPEED = 6
const JUMP_FORCE = 6 // Adjusted slightly for better feel

const Player = () => {
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

    const { forward, backward, leftward, rightward, jump } = getKeys()
    const velocity = body.current.linvel()
    const translation = body.current.translation()

    // --- MOVEMENT CALCULATIONS ---
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

    // --- JUMP PHYSICS ---
    // Check if grounded (velocity Y is close to 0)
    if (jump && Math.abs(velocity.y) < 0.2) {
      body.current.applyImpulse({ x: 0, y: JUMP_FORCE, z: 0 }, true)
    }

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

    // --- ANIMATION LOGIC (FIXED) ---
    // 1. Is the player moving up or falling down significantly?
    const inAir = Math.abs(velocity.y) > 0.5
    // 2. Is the player moving horizontally?
    const moving = direction.length() > 0.1

    if (inAir) {
      // Priority 1: If in air, JUMP
      manRef.current?.play(AnimationNames.Jump)
    } else if (moving) {
      // Priority 2: If on ground and moving, WALK
      manRef.current?.play(AnimationNames.Walk)
    } else {
      // Priority 3: If on ground and still, IDLE
      manRef.current?.play(AnimationNames.Idle)
    }

    // --- CAMERA FOLLOW ---
    cameraPosition.copy(translation)
    cameraPosition.y += 1.5
    cameraPosition.z += 5
    state.camera.position.lerp(cameraPosition, 0.1)
    state.camera.lookAt(translation.x, translation.y + 1, translation.z)
  })

  const playerHitGround = (event) => {
    // Only play sound if hitting the ground hard enough or actually landing
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
      position={[1, 10, 1.2]}
      restitution={0}
      friction={1}
      mass={1}
      lockRotations
      onCollisionEnter={playerHitGround}
    >
      <Man scale={0.75} ref={manRef} />
    </RigidBody>
  )
}

export default Player