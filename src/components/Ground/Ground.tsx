
import * as THREE from 'three'
const Ground = () => {
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 10, 10]} >
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color="lightblue" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Ground
