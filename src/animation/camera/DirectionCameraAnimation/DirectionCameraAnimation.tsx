import { useSpring } from '@react-spring/three';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

type SpringCameraProps = {
    targetPosition: [number, number, number];
};

export function CameraMover({ targetPosition }: SpringCameraProps) {
    const finishedRef = useRef(false);
    const { camera } = useThree();

    const spring = useSpring(() => ({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        config: { mass: 1, tension: 170, friction: 26 },
    }));
    const api = spring[1]

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            api.start({
                x: targetPosition[0],
                y: targetPosition[1],
                z: targetPosition[2],
                onChange: ({ value }) => {
                    if (!finishedRef.current) {
                        camera.position.set(value.x, value.y, value.z);
                        camera.updateProjectionMatrix();
                    }
                },
                onRest: () => {
                    finishedRef.current = true;
                },
            });
        });

        return () => cancelAnimationFrame(raf);
    }, []); // Only run on mount

    return null;
}
