import React, { useEffect, useRef, useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { CapsuleCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { Controls } from '../../App'
import { useFrame } from '@react-three/fiber'

const Player = () => {
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const [animation,setAnimation] = useState(AnimationNames.Idle)
    const body = useRef<RapierRigidBody | null>(null);
    // onCollisionEnter={playSound}

    useFrame((state,delta) => {
        // left = 'left',
        // right = 'right',
        // jump = 'jump',
        const { forward, backward, leftward, rightWard ,jump} = getKeys();
        if(forward){
            playerWalkFront(delta)
        }
        if(backward){
            playerWalkBack()
        }
        if(leftward){
            playerMoveLeft()
        }
        if(rightWard){
            playerMoveRight()
        }
        if(jump){
            playerJump()
        }
    })
  const walkingRef= useRef(null)  
   const  playerWalkFront = (delta) => {
    setAnimation(AnimationNames.Walk)
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };
    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;
   
    if (body.current) {
        impulse.z += impulseStrength;
        torque.x -= torqueStrength;
        body.current.applyImpulse(impulse, true);
        body.current.applyTorqueImpulse(torque, true);
       
        if(walkingRef.current){
            clearTimeout(walkingRef.current)
            walkingRef.current=null
        }

     walkingRef.current=   setTimeout(() => {
            setAnimation(AnimationNames.Idle)
        },500)
    }

        console.log('player  walk front')
    }
    const  playerWalkBack = () => {
        console.log('player  walk back')
    }
    const  playerMoveLeft = () => {
        console.log('player move left')
    }
    const  playerMoveRight = () => {
        console.log('player move right')
    }

    const  playerJump = () => {
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



    return (
        <RigidBody
        ref={body} 
        colliders={'hull'}
        position={[2, 10, 5]}
        restitution={0.0}
        friction={1}
        mass={1}
        enabledRotations={[false, false, false]}  // prevents falling over
      >
          <Man animationType={animation} scale={0.25} />  
      </RigidBody>
    )
}

export default Player
