
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './Projects.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
const R3FProjects = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio()
    const portalRoot = document.getElementById("portfolio-view")

    return (
        <>
            {activeSection === 'projects' && portalRoot && (
                <Html>
                    {createPortal(<ProjectsContent />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Projects"
                isStreetLight={false}
                boxFactor={9}
                position={[-34, 0, 5]}
                color="pink"
                hoverColor="green"
                onClick={() => {

                    setActiveSection('projects')

                }}
            />
        </>
    )
}




const ProjectsContent = () => {

    return <div className="portfolio-project-container">
        <section className="card">
            <h1>Welcome to My 3D Portfolio</h1> <h3>
                Projects
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

export default R3FProjects