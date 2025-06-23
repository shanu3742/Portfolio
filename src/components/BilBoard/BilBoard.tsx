import { Center, Html } from '@react-three/drei';

import React, { useEffect, useRef, useState } from 'react';


const BilBoard = () => {

    const bilboardHtmlRef = useRef(null);
    const currentPageSection = useRef('home')
    const [isBilBoardInit, setIsBilBoardInit] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsBilBoardInit(true)
        }, 1500 * 2)
    }, [])

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data?.type === 'portfolio-message') {
                console.log('section', event.data.payload.section)
                const pageSection = event.data.payload.section;
                if (bilboardHtmlRef.current && pageSection && pageSection !== currentPageSection.current) {
                    currentPageSection.current = pageSection
                    bilboardHtmlRef.current.src = `/portfolio/shanu.portfolio.html#${pageSection}`
                }


            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <>
            {
                isBilBoardInit && <group position={[-5, 0, -3.5]}>
                    <Center>
                        {/* Group both Html and board */}
                        <group position={[0, 2, 0]} rotation={[0, Math.PI / 4, 0]}>
                            {/* HTML iframe */}
                            <Html
                                style={{ pointerEvents: 'none' }}
                                transform
                                wrapperClass="html-screen"
                                distanceFactor={1.6}
                                position={[0, 0, 0]} // Slightly in front
                            >
                                <iframe
                                    ref={bilboardHtmlRef}
                                    src={`./portfolio/shanu.portfolio.html`}
                                    width="400"
                                    height="250"
                                    style={{ border: 'none', borderRadius: '10px' }}
                                />
                            </Html>

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
