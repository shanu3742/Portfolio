
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './intro.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import SideBarLayout from "../layout"
import useTypeWriter from "../../../hooks/useTypeWriter"
import Highlighter from "react-highlight-words";
const R3FIntro = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio() as any
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
                color="#4F86C6"
                hoverColor="#6FA1D8"
                onClick={() => {

                    setActiveSection('intro')

                }}
            />
        </>
    )
}



const IntroContent = ({ setActiveSection }: any) => {
    const para1 = `I am a Software Engineer and data visualization specialist with over 4.5+ years of experience building high-performance, interactive financial applications. I specialize in D3.js–driven visualizations and have strong expertise in React, TypeScript, and Angular, with hands-on experience improving frontend performance and scalability.`;

    const para2 = `At StockEdge, I have built complex financial charts, upgraded large-scale Angular applications, and optimized legacy code to significantly reduce load times and improve user insights. I am currently expanding my skill set into Three.js and React Three Fiber to create immersive 3D data visualizations. I am passionate about transforming complex data into clear, intuitive, and visually engaging experiences.`;

    const para3 = `I live by the principle: "Karm karo, phal ki chinta mat kro" (Do your duty, without concern for the results).`;

    const text1 = useTypeWriter(para1, 25);
    const text2 = useTypeWriter(text1.length === para1.length ? para2 : "", 25);
    const text3 = useTypeWriter(
        text2.length === para2.length ? para3 : "",
        25
    );

    return (
        <SideBarLayout header="Introduction" setActiveSection={setActiveSection}>
            <div className="w-[295px] min-h-screen bg-black/80 backdrop-blur-md p-4  text-gray-100 shadow-2xl border-l-4 border-teal-600/30 space-y-4">

                <p>
                    <Highlighter
                        highlightClassName="font-semibold text-blue-400"
                        searchWords={["Software Engineer", "D3.js"]}
                        autoEscape={true}
                        textToHighlight={text1}
                    />
                </p>

                {text1.length === para1.length && (

                    <p>
                        <Highlighter
                            highlightClassName="font-semibold text-blue-400"
                            searchWords={["StockEdge", "financial charts"]}
                            autoEscape={true}
                            textToHighlight={text2}
                        />
                    </p>
                )}

                {text2.length === para2.length && (
                    <p>
                        <Highlighter
                            highlightClassName="italic text-orange-400"
                            searchWords={["Karm karo, phal ki chinta mat kro"]}
                            autoEscape={true}
                            textToHighlight={text3}
                            highlightStyle={{ backgroundColor: 'transparent' }}
                        />
                    </p>
                )}
            </div>
        </SideBarLayout>
    );
};


export default R3FIntro