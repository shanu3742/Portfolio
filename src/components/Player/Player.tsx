import React, { useEffect, useRef, useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { CapsuleCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { Controls } from '../../App'
import { useFrame } from '@react-three/fiber'

const Player = () => {
    const [hitSound] = useState(() => {
        return new Audio('./mp3/footstep.mp3')
    })
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const body = useRef<RapierRigidBody | null>(null);
    const walkingRef = useRef(null)
    const manRef = useRef(null)
    // onCollisionEnter={playSound}

    useFrame((state, delta) => {
        // left = 'left',
        // right = 'right',
        // jump = 'jump',
        const { forward, backward, leftward, rightward, jump } = getKeys();
        if (forward) {
            playerWalkFront(delta)
        }
        if (backward) {
            playerWalkBack(delta)
        }
        if (leftward) {
            playerMoveLeft(delta)
        }
        if (rightward) {
            playerMoveRight(delta)
        }
        if (jump) {
            playerJump()
        }
    })

    const playerWalkFront = (delta) => {
        manRef.current?.play(AnimationNames.Walk)
    
        const impulseStrength = 1.2 * delta
    
        if (!body.current) return
    
        // ✅ Get Y rotation from Rapier rigidbody quaternion
        const rot = body.current.rotation()
    
        // ✅ Convert rotation to forward direction
        const forward = {
            x: Math.sin(rot.y),
            y: 0,
            z: Math.cos(rot.y)
        }
    
        // ✅ Apply impulse in facing direction
        body.current.applyImpulse(
            {
                x: forward.x * impulseStrength,
                y: 0,
                z: forward.z * impulseStrength
            },
            true
        )
    
        // ✅ Reset walk animation properly
        if (walkingRef.current) {
            clearTimeout(walkingRef.current)
            walkingRef.current = null
        }
    
        walkingRef.current = setTimeout(() => {
            manRef.current?.play(AnimationNames.Idle)
        }, 300)
    
        console.log('player walk front')
    }
    

    const playerWalkBack = (delta) => {
        manRef.current?.play(AnimationNames.Walk);

        const impulseStrength = 0.6 * delta;

        if (body.current) {
            // 2️⃣ Apply backward movement AFTER rotation
            const impulse = { x: 0, y: 0, z: -impulseStrength };
            body.current.applyImpulse(impulse, true);

            // 3️⃣ Reset walk animation properly
            if (walkingRef.current) {
                clearTimeout(walkingRef.current);
                walkingRef.current = null;
            }

            walkingRef.current = setTimeout(() => {
                manRef.current?.play(AnimationNames.Idle);
            }, 500);
        }

        console.log("Player walking back");
    };




    const playerJump = () => {
        console.log('player jump')
    }


    useEffect(() => {
        const unsubscribeAny = subscribeKeys(() => {
            console.log('listing to change')
        })


        return () => {
            unsubscribeAny()
        }
    })

    const playerHitGround = (event) => {
        console.log('player hit the ground', event.other.rigidBodyObject.name)
        if (event.other.rigidBodyObject.name === 'ground') {
            playSound()
        }
    }
    const playSound = () => {
        hitSound.currentTime = 0;
        hitSound.volume = Math.random();
        hitSound.play()
    }
    const playerMoveLeft = (delta) => {
        console.log('right')
        const angleY = body.current.rotation().y + Math.PI / 2; // face left
        body.current.setRotation({ x: 0, y: angleY, z: 0, w: 1 }, true);
        moveInDirection(delta, angleY);
    };

    const playerMoveRight = (delta) => {
        console.log('right')
        const angleY = body.current.rotation().y - Math.PI / 2; // face right
        body.current.setRotation({ x: 0, y: angleY, z: 0, w: 1 }, true);
        moveInDirection(delta, angleY);
    };


    const moveInDirection = (delta, angleY) => {
        manRef.current?.play(AnimationNames.Walk);

        if (body.current) {
            const rot = body.current.rotation();
            const forward = {
                x: Math.sin(angleY),
                y: 0,
                z: Math.cos(angleY)
            };

            const impulseStrength = 1.2 * delta;
            body.current.applyImpulse({
                x: forward.x * impulseStrength,
                y: 0,
                z: forward.z * impulseStrength
            }, true);

            if (walkingRef.current) clearTimeout(walkingRef.current);
            walkingRef.current = setTimeout(() => {
                manRef.current?.play(AnimationNames.Idle);
            }, 500);
        }
    };


    return (
        <RigidBody
            ref={body}
            colliders={'hull'}
            position={[2, 10, 5]}
            restitution={0.0}
            friction={1}
            mass={1}
            enabledRotations={[false, true, false]}  // prevents falling over
            onCollisionEnter={playerHitGround}
        >
            <Man scale={0.25} ref={manRef} />
        </RigidBody>
    )
}

export default Player
