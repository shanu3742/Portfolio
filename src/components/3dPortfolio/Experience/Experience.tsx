
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './Experience.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import ExperiencePieChart from "../../dataviz/Pie"


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
                isStreetLight={true}
                hoverColor="orange"
                boxFactor={9}
                position={[25, 1, 0]}
                onClick={() => {

                    setActiveSection('experience')

                }}
            />
        </>
    )
}




const ExperienceContent = () => {
    const data = [
        { label: "Aarth", value: 1.5 },
        { label: "StockEdge", value: 3.2 }
    ];
    return <div className="portfolio-Experience-container" >
        <section className="card">
            <h1>Welcome to My 3D Portfolio</h1> <h3>
                Experience
            </h3>
            <section>
                <div className="pie-chart-label">
                    <div className="flex-box">
                        <span className="label-box" style={{ background: "#00CDA3" }}></span>
                        <h6 style={{ color: "#00CDA3" }}>Aarth (1.5 yrs)</h6>
                    </div>
                    <div className="flex-box">
                        <span className="label-box" style={{ background: "rgb(42, 69, 122)" }}></span>
                        <h6 style={{ color: "rgb(42, 69, 122)" }}>StockEdge (3.2 yrs)</h6>
                    </div>
                </div>
                <ExperiencePieChart data={data} color={["#00CDA3", "rgb(42, 69, 122)"]} width={200} height={200} />
            </section>
        </section>
    </div>
}

export default R3FExperience