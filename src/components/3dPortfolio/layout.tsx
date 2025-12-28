import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import './layout.css'

const SideBarLayout = ({ header, setActiveSection, children }: { header: string, setActiveSection: any, children: React.ReactNode }) => {

    return (<>
        <div className="sidebar-container" >
            <button className="close-btn" onClick={() => setActiveSection('')}>
                <IonIcon icon={close} />
            </button>
            <section className="sidebar-card">
                <h3 className="sidebar-header">
                    {header}
                </h3>

                {children}
            </section>
        </div>
    </>)
}

export default SideBarLayout;