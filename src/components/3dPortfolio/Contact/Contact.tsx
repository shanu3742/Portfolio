
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './Contact.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import SideBarLayout from "../layout"
import Feedback from "../../Feedback/Feedback"
const R3FContact = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio() as any
    const portalRoot = document.getElementById("portfolio-view")

    return (
        <>
            {activeSection === 'contact' && portalRoot && (
                <Html>
                    {createPortal(<ContactContent setActiveSection={setActiveSection} />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Contact"
                isStreetLight={false}
                position={[-40, 0.8, -2]}
                boxFactor={8}
                color="#C98A8A"
                hoverColor="#E3A3A3"
                onClick={() => {

                    setActiveSection('contact')

                }}
            />
        </>
    )
}




const ContactContent = ({ setActiveSection }: any) => {
    return <SideBarLayout header="Contacts" setActiveSection={setActiveSection}>
        <Feedback />
    </SideBarLayout>
}

export default R3FContact