import React, { useRef } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { Html, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { createPortal } from 'react-dom'
import Controller from './PlayerController/PlayerController'

const SPEED = 6

const Player = () => {


  // const [hitSound] = useState(() => new Audio('./mp3/footstep.mp3'))
  const movement = useRef<any>({ forward: false, backward: false, leftward: false, rightward: false })
  const [, getKeys] = useKeyboardControls()
  const body = useRef<RapierRigidBody | null>(null)
  const manRef = useRef<any>(null);
  const controllerRef = useRef<any>(null);

  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()
  const cameraPosition = new THREE.Vector3()

  useFrame((state) => {
    if (!body.current) return

    const { forward: forwardK, backward: backwardk, leftward: leftwardk, rightward: rightwardk } = getKeys()
    const forward = forwardK || movement.current.forward;
    const backward = backwardk || movement.current.backward;
    const leftward = leftwardk || movement.current.leftward;
    const rightward = rightwardk || movement.current.rightward;
    const velocity = body.current.linvel()
    const translation = body.current.translation()
    // FORWARD
    if (forward && controllerRef?.current) {
      controllerRef.current.onForwardPressed();
    } else {
      if (controllerRef?.current) {
        controllerRef.current.onForwardReleased();
      }
    }

    // BACKWARD
    if (backward && controllerRef?.current) {
      controllerRef.current.onBackwardPressed();
    } else {
      if (controllerRef?.current) {
        controllerRef.current.onBackwardReleased();
      }
    }


    // LEFT
    if (leftward && controllerRef?.current) {
      controllerRef.current.onLeftwardPressed();
    } else {
      if (controllerRef?.current) {
        controllerRef.current.onLeftwardReleased();
      }
    }


    // RIGHT
    if (rightward && controllerRef?.current) {
      controllerRef.current.onRightwardPressed();
    } else {
      if (controllerRef?.current) {
        controllerRef.current.onRightwardReleased();
      }
    }

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

    cameraPosition.copy(translation)
    cameraPosition.y += 1.5
    cameraPosition.z += 5
    state.camera.position.lerp(cameraPosition, 0.1)
    state.camera.lookAt(translation.x, translation.y + 1, translation.z)
  })

  // Keep sound logic on collision for impact sounds
  const playerHitGround = (event: any) => {
    if (event.other.rigidBodyObject?.name === 'ground') {
      // playSound()
    }
  }

  // const playSound = () => {
  //   hitSound.currentTime = 0
  //   hitSound.volume = Math.random()
  //   hitSound.play()
  // }
  const handleMovement = (direction: any, active: any) => {
    movement.current[direction] = active;
  }
  const MAN_SCALE: any = 0.25;

  return (
    <>
      <RigidBody
        ref={body}
        colliders={'hull'}
        position={[1, 1, 1.2]}
        restitution={0}
        friction={1}
        mass={1}
        name='man'
        lockRotations
        onCollisionEnter={playerHitGround}
      >
        <Man scale={MAN_SCALE} ref={manRef} />
      </RigidBody>
      <Html>
        {createPortal(<Controller onMove={handleMovement} ref={controllerRef} />, document.body)}
      </Html>
    </>

  )
}

export default Player