import { Html, } from '@react-three/drei'

function Annotation({ children, distanceFactor, ...props }) {

    if (distanceFactor) {
        return <Html
            {...props}
            transform
            wrapperClass="view-screen"
            occlude="blending"
            distanceFactor={distanceFactor}
        >

            {children}

        </Html>
    } else {
        return <Html
            {...props}
            transform
            occlude="blending"
            wrapperClass="html-screen"


        >
            <div className="annotation">
                {children}
            </div>
        </Html>
    }


}

export default Annotation
// geometry={
//                 /** The geometry is optional, it allows you to use any shape.
//                  *  By default it would be a plane. We need round edges here ...
//                  */
//                 <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
//             }