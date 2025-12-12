import { RoundedBox, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
const FONT_URL = "font/helvetik.json";
// You will need a font file for Text3D.
// Download a JSON font (like 'helvetiker_regular.typeface.json')
// and place it in your 'public' folder or similar.

function Button({ position, text, textSize = 0.5, onClick }: any) {
  const meshRef = useRef<THREE.Group>(null!);
  const textRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);
  const [textXOffset, setTextXOffset] = useState(0);

  // Set initial and pressed-down Y position
  const initialY = position ? position[1] : 0;
  const pressedY = initialY - 0.05;

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
    }

    // Release the button after a short moment
    setTimeout(() => {
      setClick(false);
    }, 150);
  };

  return (
    <group ref={meshRef} position={position}>
      {/* 3D Box for the button body (centered at [0, 0, 0] of the group) */}
      <RoundedBox
        args={[textSize * 6, 0.4, 0.8]} // Width, Height, Depth (Width is proportional to textSize)
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
          color={hovered ? "#4d94ff" : "#007bff"} // Change color on hover
          metalness={0.5}
          roughness={0.2}
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
    </group>
  );
}

export default Button;
