
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import { useState } from "react"
import './Experience.css'
import { createPortal } from "react-dom"
import * as d3 from 'd3'
import { useR3FPortfolio } from "../Index"


const R3FExperience = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio()


    const portalRoot = document.getElementById("portfolio-view")


    return (
        <>
            {activeSection === 'experience' && portalRoot && (
                <Html>
                    {createPortal(<ExperienceContent />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Experience"
                color="yellow"
                hoverColor="orange"
                position={[15, 0.5, 0]}
                onClick={() => {

                    setActiveSection('experience')

                }}
            />
        </>
    )
}




const ExperienceContent = () => {
    return <div className="portfolio-Experience-container" >
        <section className="card">
            <h1>Welcome to My 3D Portfolio</h1> <h3>
                Experience
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

export default R3FExperience