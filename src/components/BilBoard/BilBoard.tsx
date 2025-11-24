import { Center, Html } from '@react-three/drei';

import React, { useEffect, useRef, useState } from 'react';
import { RigidBody } from "@react-three/rapier"
import Annotation from '../Annotation/Annotation';
import Hero from '../view/Hero';

const BilBoard = () => {
   const [imageSrc,setImageSrc] = useState('./image/hero.png')
    const bilboardHtmlRef = useRef(null);
    const currentPageSection = useRef('home')
    const [isBilBoardInit, setIsBilBoardInit] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsBilBoardInit(true)
        }, 1500 * 10)
    }, [])

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data?.type === 'portfolio-message') {
               const pagedata =  event.data.payload.section
                if(bilboardHtmlRef.current && pagedata && pagedata==='hero' && imageSrc !== `./image/hero.png`){
                        setImageSrc(`./image/hero.png`)
                }
                console.log('section', event.data.payload.section)
                const navigationList = ['about','contact','experience','project','skills']
                const pageSection = event.data.payload.section;
                if (bilboardHtmlRef.current && pageSection && pageSection !== currentPageSection.current && navigationList.includes(pageSection)) {
                    currentPageSection.current = pageSection
                    // bilboardHtmlRef.current.src = `/portfolio/shanu.portfolio.html#${pageSection}`
                    setImageSrc(`./image/${pageSection}.png`)
                }


            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <>
            {
                isBilBoardInit &&
                <group position={[-7, 4, -3.5]}>
                  
                        <Center>
                            {/* Group both Html and board */}

                            <group position={[0, 2, 0]} rotation={[0, Math.PI / 4, 0]}>
                                <Annotation position={[-4, 2, -2]}>
                                    <span className="anotation-text">Laptop Screen View</span>
                                </Annotation>
                                {/* HTML iframe */}
                                <Annotation
                                   
                                >
                                   <Hero />
                                </Annotation>

                                {/* Billboard behind HTML */}
                                <group position={[0, 0, -0.01]}>



                                    {/* Legs */}
                                    <mesh position={[-1, -1.55, -0.05]}>
                                        <boxGeometry args={[0.1, 0.5, 0.1]} />
                                        <meshStandardMaterial color="#555555" />
                                    </mesh>
                                    <mesh position={[1, -1.55, -0.05]}>
                                        <boxGeometry args={[0.1, 0.5, 0.1]} />
                                        <meshStandardMaterial color="#555555" />
                                    </mesh>
                                </group>
                            </group>
                        </Center>
                  
                </group>
            }
        </>
    );
};

export default BilBoard;
