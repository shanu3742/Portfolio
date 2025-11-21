import { Environment, Sky } from "@react-three/drei"
import { Color } from "three"

const SceneEnvironment = () => {
  return (
    <>
      {/* Sky lighting */}
      <Sky
        sunPosition={[100, 20, 100]}
        turbidity={10}
        rayleigh={2}
        mieDirectionalG={0.9}
        elevation={2}
      />

      {/* HDRI Environment */}
      <Environment
        files="/hdri/citrus_orchard_road_puresky_4k.hdr"
        ground={{
          height: 5,
          radius: 50,
          scale: 100
        }}
      />

      {/* Atmosphere fog */}
      <fog attach="fog" args={["#88aabb", 15, 80]} />
    </>
  )
}

export default SceneEnvironment
