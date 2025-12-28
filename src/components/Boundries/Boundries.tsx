import { useIonAlert } from "@ionic/react";
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useRef, useState } from "react";

const Boundries = () => {
    const [hitSound] = useState(() => new Audio('./mp3/wallcollision.mp3'))
    let timerRef = useRef(null);
    const isAlertActive = useRef(false);
    const [presentAlert, dismissAlert] = useIonAlert();
    const playSound = () => {
        hitSound.currentTime = 0
        hitSound.volume = Math.random()
        hitSound.play()
    }
    const onVirtualWallCollision = async (event) => {
        if (event.other.rigidBodyObject?.name === 'man') {

            // 2. ONLY proceed if an alert isn't already showing
            if (isAlertActive.current) return;

            console.log('collision triggered');
            isAlertActive.current = true; // Lock the function

            if (timerRef.current) {
                clearTimeout(timerRef.current);
                dismissAlert();
            }
            playSound()
            presentAlert({
                header: 'Virtual wall',
                cssClass: 'error-alert',
                message: 'You have reached the boundary of the experience area.',
                buttons: [],
            });

            timerRef.current = setTimeout(() => {
                dismissAlert();
                // 3. Unlock after the alert is dismissed
                isAlertActive.current = false;
            }, 1000);
        }
    };
    return <>
        {/* toward z boundries */}
        <RigidBody type="fixed">
            <CuboidCollider
                args={[40, 0.1, 10]}
                position={[0, 10, -5]}
                rotation={[Math.PI / 2, 0, 0]}
                onCollisionEnter={onVirtualWallCollision}
            />
        </RigidBody>

        {/* opposite to z  */}

        <RigidBody type="fixed">
            <CuboidCollider
                args={[40, 0.1, 10]}
                position={[0, 10, 20]}
                rotation={[Math.PI / 2, 0, 0]}
                onCollisionEnter={onVirtualWallCollision}
            />
        </RigidBody>
        {/* left boundries */}
        <RigidBody type="fixed">
            <CuboidCollider
                args={[10, 0.1, 14]}
                position={[-40, 10, 6]}
                rotation={[0, 0, Math.PI / 2]}
                onCollisionEnter={onVirtualWallCollision}
            />
        </RigidBody>

        {/* right boundries */}
        <RigidBody type="fixed">
            <CuboidCollider
                args={[10, 0.1, 14]}
                position={[40, 10, 6]}
                rotation={[0, 0, Math.PI / 2]}
                onCollisionEnter={onVirtualWallCollision}
            />
        </RigidBody>

    </>
}

export default Boundries