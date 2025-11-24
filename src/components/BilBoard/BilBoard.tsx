import { Center } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import Annotation from '../Annotation/Annotation';
import PageView from '../view/PageView';

const BilBoard = () => {
    const [imageSrc, setImageSrc] = useState('hero');
    const currentPageSection = useRef('hero');

    // Initialize billboard after short delay
    const [isBilBoardInit, setIsBilBoardInit] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsBilBoardInit(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    console.log("Current Display:", imageSrc);

    useEffect(() => {
        const navigationList = ['hero', 'about', 'contact', 'experience', 'projects', 'skills'];

        const handleMessage = (event) => {
            const section = event?.data?.payload?.section;

            if (!section || !navigationList.includes(section)) return;

            if (section !== currentPageSection.current) {
                currentPageSection.current = section;
                setImageSrc(section);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    if (!isBilBoardInit) return null;

    return (
        <group position={[-7, 5, -3.5]}>
            <Center>
                <group position={[0, 2, 0]} rotation={[0, Math.PI / 4, 0]}>
                    {/* Annotation */}
                    <Annotation position={[-8.5, 2, -2]}>
                        <span className="anotation-text">Laptop Screen View</span>
                    </Annotation>

                    {/* Page View */}
                    <Annotation distanceFactor={4}>

                        <PageView
                            key={imageSrc}
                            pageName={imageSrc}
                        />


                    </Annotation>

                    {/* Stand Behind Billboard */}
                    <group position={[0, 0, -0.01]}>
                        <mesh position={[-2, -1.55, -0.05]}>
                            <boxGeometry args={[0.1, 8, 0.1]} />
                            <meshStandardMaterial color="#555555" />
                        </mesh>

                        <mesh position={[2, -1.55, -0.05]}>
                            <boxGeometry args={[0.1, 8, 0.1]} />
                            <meshStandardMaterial color="#555555" />
                        </mesh>
                    </group>
                </group>
            </Center>
        </group>
    );
};

export default BilBoard;
