
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './Skill.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import SideBarLayout from "../layout"
import TreeMap from "../../dataviz/TreeMap/TreeMap"
import { useState } from "react"
import { SectionTitle } from "../Experience/Experience"

const R3FSkill = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio()
    const portalRoot = document.getElementById("portfolio-view")

    return (
        <>
            {activeSection === 'skill' && portalRoot && (
                <Html>
                    {createPortal(<SkillContent setActiveSection={setActiveSection} />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Skills"
                isStreetLight={false}
                position={[12, 0.1, -6]}
                color="pink"
                hoverColor="green"
                onClick={() => {

                    setActiveSection('skill')

                }}
            />
        </>
    )
}




const SkillContent = ({ setActiveSection }) => {
    const [selectedStack, setSelectedStack] = useState(null);
    console.log('selectedStack', selectedStack?.details);
    return <SideBarLayout header="Skills" setActiveSection={setActiveSection}>
        <TreeMap onClick={(data) => setSelectedStack(data)} />
        {
            selectedStack?.details.length > 0 ? <section className="w-[295px] bg-black/80 backdrop-blur-md p-4 text-gray-100   shadow-2xl border-l-4 border-teal-600/30">
                <SectionTitle title={`My Journey as ${selectedStack?.name}`} />
                <ul className="space-y-3">
                    {selectedStack?.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-teal-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>

            </section> : <section>
                <h6 style={{ textAlign: 'center' }} className="text-blue-950">
                    👆  Click on a stack to see details
                </h6>
            </section>
        }

    </SideBarLayout>
}

export default R3FSkill