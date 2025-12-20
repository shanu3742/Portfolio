
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './intro.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import SideBarLayout from "../layout"
const R3FIntro = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio()
    const portalRoot = document.getElementById("portfolio-view")

    return (
        <>
            {activeSection === 'intro' && portalRoot && (
                <Html>
                    {createPortal(<IntroContent setActiveSection={setActiveSection} />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Intro"
                isStreetLight={true}
                position={[0, 0.1, 0]}
                onClick={() => {

                    setActiveSection('intro')

                }}
            />
        </>
    )
}




const IntroContent = ({ setActiveSection }) => {

    return <SideBarLayout header="Introduction" setActiveSection={setActiveSection}>

        <div className="w-[295px] bg-black/80 backdrop-blur-md p-4 text-gray-100   shadow-2xl border-l-4 border-teal-600/30">
            <p>
                I am a
                <strong className="font-semibold text-blue-400"> Software Engineer</strong>  and <strong className="font-semibold text-blue-400">data visualization specialist</strong> with over 4.5+ years of experience building high-performance, interactive financial applications. I specialize in D3.js–driven visualizations and have strong expertise in React, TypeScript, and Angular, with hands-on experience improving frontend performance and scalability.
            </p>
            <br />
            <p>
                <strong className="font-semibold text-blue-400">At StockEdge</strong>, I have built complex financial charts, upgraded large-scale Angular applications, and optimized legacy code to significantly reduce load times and improve user insights. I am currently expanding my skill set into Three.js and React Three Fiber to create immersive 3D data visualizations. I am passionate about transforming complex data into clear, intuitive, and visually engaging experiences.
            </p>
            <br />
            <p>
                I live by the principle: <em className="text-orange-400">"Karm karo, phal ki chinta mat kro"</em> (Do your duty, without concern for the results).
            </p>
        </div>
    </SideBarLayout>
}

export default R3FIntro