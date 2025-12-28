import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const ResourceLoaderInfo = () => {
    const { active, progress } = useProgress();
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!active) {
            const timer = setTimeout(() => setShow(false), 500);
            return () => clearTimeout(timer);
        }
    }, [active]);

    if (!show) return null;

    return (
        <div style={overlayStyle as any}>
            <div style={containerStyle as any}>
                <h1>Loading Experience...</h1>
                <div style={progressBarContainer}>
                    <div style={{ ...progressBar, width: `${progress}%` }} />
                </div>
                <p>{Math.round(progress)}%</p>
            </div>
        </div>
    );
};

// Simple Styles
const overlayStyle = {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    background: '#111', display: 'flex', justifyContent: 'center',
    alignItems: 'center', zIndex: 1000, transition: 'opacity 0.5s ease'
};

const progressBarContainer = { width: '200px', height: '10px', background: '#333', marginTop: '10px' };
const progressBar = { height: '100%', background: 'white', transition: 'width 0.2s ease' };
const containerStyle = { color: 'white', textAlign: 'center' };

export default ResourceLoaderInfo;