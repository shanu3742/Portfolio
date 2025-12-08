import { CuboidCollider, RigidBody } from "@react-three/rapier"

const Boundries = () => {

    return <>
    {/* toward z boundries */}
    <RigidBody type="fixed">
          <CuboidCollider
                            args={[40, 0.1, 10]}
                            position={[0, 10, -5]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
    </RigidBody>

{/* opposite to z  */}

    <RigidBody type="fixed">
          <CuboidCollider
                            args={[40, 0.1, 10]}
                            position={[0, 10, 20]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
    </RigidBody>
{/* left boundries */}
    <RigidBody type="fixed">
          <CuboidCollider
                            args={[10, 0.1, 14]}
                            position={[-40, 10, 6]}
                            rotation={[0, 0, Math.PI/2]}
                        />
    </RigidBody>

    {/* right boundries */}
    <RigidBody type="fixed">
          <CuboidCollider
                            args={[10, 0.1, 14]}
                            position={[40, 10, 6]}
                            rotation={[0, 0, Math.PI/2]}
                        />
    </RigidBody>

    </>
}

export default Boundries