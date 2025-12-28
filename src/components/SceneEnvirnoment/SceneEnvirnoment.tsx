import { Sky } from "@react-three/drei"



const SceneEnvironment = () => {
  return (
    <>

      <Sky
        sunPosition={[100, 20, 100]}
        turbidity={10}
        rayleigh={2}
        mieDirectionalG={0.9}

      />
      <fog attach="fog" args={["#88aabb", 15, 80]} />
      {/* add envirnoment at the end */}
    </>
  )
}

export default SceneEnvironment
