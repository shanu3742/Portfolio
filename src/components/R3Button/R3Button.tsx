import { RoundedBox, Text3D, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import './R3Button.css';
import Arrow3D from "../Arrow3d/Arrow3d";
import { RigidBody } from "@react-three/rapier";
import { StreetLight } from "../StreetLight/StreetLight";

const FONT_URL = "font/helvetik.json";
// You will need a font file for Text3D.
// Download a JSON font (like 'helvetiker_regular.typeface.json')
// and place it in your 'public' folder or similar.

function R3Button({ position, isStreetLight = false, boxFactor = 6, color = '#007bff', hoverColor = '#00ff00', text, textSize = 0.5, onClick }: any) {
  const [hitSound] = useState(() => new Audio('./mp3/click.wav'))
  const meshRef = useRef<THREE.Group>(null!);
  const textRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);
  const [textXOffset, setTextXOffset] = useState(0);
  const boxRef = useRef<THREE.Mesh>(null!);
  useCursor(hovered)

  // Set initial and pressed-down Y position
  const initialY = position ? position[1] : 0;
  const pressedY = initialY - 0.5;

  useLayoutEffect(() => {
    if (textRef.current) {
      textRef.current.geometry.computeBoundingBox();

      // Bounding box min and max positions on the X-axis
      const box = textRef.current.geometry.boundingBox;
      // Calculate the total width of the text
      const textWidth = box.max.x - box.min.x;
      // The required offset to center the text is negative half its width

      setTextXOffset(-textWidth / 2);
    }
  }, [text, textSize]); // Recalculate if text or size changes

  // Use useFrame to smoothly animate the button position when clicked
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Target Y position (pressedY if clicked, initialY otherwise)
      const targetY = clicked ? pressedY : initialY;

      // Lerp (Linear Interpolation) for smooth movement
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.1 // Interpolation factor (smoothness)
      );
    }
  });

  // Handle click logic: press down, then immediately release after a short delay
  const handleClick = (e) => {
    e.stopPropagation();
    setClick(true);

    // Call the user's onClick function
    if (onClick) {
      onClick();
      playSound()
    }

    // Release the button after a short moment
    setTimeout(() => {
      setClick(false);
    }, 150);
  };

  const playSound = () => {
    hitSound.currentTime = 0
    hitSound.volume = Math.random()
    hitSound.play()
  }


  return (
    <>
      <group position={position}>
        {
          isStreetLight && (
            <RigidBody type="fixed" colliders="cuboid">
              <group position-y={0} position-x={1} position-z={-1.5} scale={2} rotation={[0, -Math.PI / 2, 0]}>
                <StreetLight />
              </group>
            </RigidBody>
          )
        }
      </group>
      <group ref={meshRef} position={position}>
        {/* 3D Box for the button body (centered at [0, 0, 0] of the group) */}
        <RoundedBox
          ref={boxRef}
          args={[textSize * boxFactor, 0.4, 0.8]} // Width, Height, Depth (Width is proportional to textSize)
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onPointerDown={handleClick}
          castShadow
          receiveShadow
          radius={0.1} // Radius of the rounded corners
          smoothness={4} // How many segments to use for the curve (higher = smoother)
          bevelSegments={4} // Segments for the bevel geometry itself
        >
          <meshStandardMaterial
            color={hovered ? hoverColor : color} // Change color on hover
            metalness={0}
            roughness={0.6}
          />
        </RoundedBox>

        <Text3D
          ref={textRef} // <-- 1. Attach the ref
          font={FONT_URL}
          size={textSize}
          height={0.05}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01} // <-- 2. Use the calculated offset for the X position, centered, and Z-positioned on the box
          position={[textXOffset, 0.25, 0.4]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {text.toUpperCase()}
          <meshStandardMaterial color="white" />
        </Text3D>
        <Arrow3D />

      </group>
    </>
  );
}

export default R3Button;

