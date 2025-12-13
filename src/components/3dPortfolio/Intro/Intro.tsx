
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import { useEffect, useRef, useState } from "react"
import './intro.css'
import { createPortal } from "react-dom"

import "./intro.css"
const IntroTime = 1 * 1000 * 60; // 1 minute
const R3FIntro = () => {
    const [isVisible, setIsVisible] = useState(false)
    const timeoutRef = useRef<number | null>(null)

    const portalRoot = document.getElementById("portfolio-view")

    useEffect(() => {
        if (!isVisible) return

        timeoutRef.current = window.setTimeout(() => {
            setIsVisible(false)
        }, IntroTime)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [isVisible])

    return (
        <>
            {isVisible && portalRoot && (
                <Html>
                    {createPortal(<IntroContent />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Intro"
                position={[0, 0.1, 0]}
                onClick={() => {
                    if (!isVisible) {
                        setIsVisible(true)
                    }
                }}
            />
        </>
    )
}




const IntroContent = () => {

    return <div className="portfolio-intro-container">
        <section className="card">
            <h1>Welcome to My 3D Portfolio</h1> <h3>
                Introduction
            </h3>
            <p>
                I am a Software Engineer and data visualization specialist with over 3 years of experience building high-performance, interactive financial applications. I specialize in D3.js–driven visualizations and have strong expertise in React, TypeScript, and Angular, with hands-on experience improving frontend performance and scalability.
            </p>
            <p>
                At StockEdge, I have built complex financial charts, upgraded large-scale Angular applications, and optimized legacy code to significantly reduce load times and improve user insights. I am currently expanding my skill set into Three.js and React Three Fiber to create immersive 3D data visualizations. I am passionate about transforming complex data into clear, intuitive, and visually engaging experiences.
            </p>
        </section>
    </div>
}

export default R3FIntro