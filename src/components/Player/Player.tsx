import React, { useEffect, useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { Controls } from '../../App'
import { useFrame } from '@react-three/fiber'

const Player = () => {
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const [animation,setAnimation] = useState(AnimationNames.Idle)
    // onCollisionEnter={playSound}

    useFrame(() => {
        // left = 'left',
        // right = 'right',
        // jump = 'jump',
        const { forward, backward, leftward, rightWard ,jump} = getKeys();
        if(forward){
            playerWalkFront()
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
    
   const  playerWalkFront = () => {
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
