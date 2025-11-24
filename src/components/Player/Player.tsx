import React, { useState } from 'react'
import { AnimationNames, Man } from '../Man/Man'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'

const Player = () => {
    const [animation,setAnimation] = useState(AnimationNames.Idle)
    // onCollisionEnter={playSound}
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
