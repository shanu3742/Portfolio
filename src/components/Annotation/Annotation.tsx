import { Html, } from '@react-three/drei'

function Annotation({ children, ...props }) {
    return (
        <Html
            {...props}
            transform
            occlude="blending"
        >
            <div className="annotation">
                {children}
            </div>
        </Html>
    )
}

export default Annotation
// geometry={
//                 /** The geometry is optional, it allows you to use any shape.
//                  *  By default it would be a plane. We need round edges here ...
//                  */
//                 <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
//             }