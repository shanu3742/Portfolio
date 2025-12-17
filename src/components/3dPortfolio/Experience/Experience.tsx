
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './Experience.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import ExperiencePieChart from "../../dataviz/Pie"
import { useState } from "react"
import SideBarLayout from "../layout"

const R3FExperience = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio()


    const portalRoot = document.getElementById("portfolio-view")


    return (
        <>
            {activeSection === 'experience' && portalRoot && (
                <Html>
                    {createPortal(<ExperienceContent setActiveSection={setActiveSection} />, portalRoot)}
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




const ExperienceContent = ({ setActiveSection }) => {
    const data = [
        {
            label: "Aarth",
            value: 1.5,
            color: "#00CDA3",
            details: [
                {
                    "company": "Aarth Software (Aarth.io)",
                    "label": "Aarth",
                    "role": "Frontend / Full-Stack Developer",
                    "experience": "1.5 Years",
                    "techStack": [
                        "React.js",
                        "Material UI",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Firebase",
                        "JWT",
                        "SPARQL",
                        "Git"
                    ],
                    "responsibilities": [
                        "Developed scalable frontend applications using React.js and Material UI",
                        "Built reusable and configurable UI components with a focus on UX and performance",
                        "Worked on full-stack features using the MERN stack",
                        "Integrated REST APIs and handled authentication using Firebase and JWT",
                        "Collaborated with product and backend teams to deliver end-to-end features",
                        "Used Git and task management tools to manage development workflows"
                    ],
                    "majorContributions": [
                        {
                            "title": "SPARQL Query Builder Application",
                            "description": "Built a UI-based SPARQL query builder that allows users to create complex queries without writing code by selecting entities, properties, and logical operators (AND / OR). The application dynamically generates SPARQL queries and displays results in tables and visual formats."
                        },
                        {
                            "title": "Curry Company Web Application",
                            "description": "Developed a customer-facing web application enabling users to explore different cooks, customize ingredients, and understand food taste before ordering."
                        },
                        {
                            "title": "Full-Stack Feature Development",
                            "description": "Implemented backend APIs using Node.js and Express.js with MongoDB for data persistence and business logic."
                        },
                        {
                            "title": "Authentication & Security",
                            "description": "Implemented secure authentication and authorization using Firebase and JWT."
                        },
                        {
                            "title": "UI/UX Enhancement",
                            "description": "Improved application usability and responsiveness using Material UI and modern frontend design patterns."
                        }
                    ],
                    "impact": [
                        "Enabled non-technical users to build complex SPARQL queries through a visual interface",
                        "Reduced dependency on manual query writing and improved productivity",
                        "Delivered production-ready features in a fast-paced startup environment",
                        "Strengthened full-stack development and UI architecture skills"
                    ]
                }
            ]
        },
        {
            label: "StockEdge",
            value: 3.2,
            color: "rgb(42, 69, 122)",
            details: [
                {
                    "company": "StockEdge",
                    "label": "StockEdge",
                    "role": "Data Visualization Engineer (Frontend)",
                    "techStack": [
                        "Angular",
                        "Ionic",
                        "D3.js",
                        "Canvas",
                        "TypeScript",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "Capacitor"
                    ],
                    "responsibilities": [
                        "Developed advanced financial charts and data visualization widgets",
                        "Built high-performance stock market edge charts using D3.js with Canvas",
                        "Designed reusable and scalable UI components in Angular",
                        "Worked on hybrid mobile application development using Ionic",
                        "Optimized UI and chart rendering performance for large financial datasets",
                        "Maintained, refactored, and modernized legacy frontend code"
                    ],
                    "majorContributions": [
                        {
                            "title": "CLS Optimization (Mobile)",
                            "description": "Optimized Cumulative Layout Shift (CLS) score from 0.46 to 0.001 on mobile devices, significantly improving Core Web Vitals and user experience."
                        },
                        {
                            "title": "Theme Switch Blinking Fix",
                            "description": "Resolved UI blinking and flickering issues during theme switching by improving state handling and render flow."
                        },
                        {
                            "title": "App Crash Resolution",
                            "description": "Identified and fixed critical crash issues in the application, improving overall app stability and reliability."
                        },
                        {
                            "title": "Chart Update Optimization",
                            "description": "Refactored chart logic to prevent full chart recreation on input change; implemented efficient updates so only graph data updates, improving performance."
                        },
                        {
                            "title": "Storage Strategy Improvement",
                            "description": "Replaced localStorage with Capacitor Preferences for mobile apps to ensure platform-safe persistence, while continuing to use localStorage for the web application."
                        },
                        {
                            "title": "Complex Edge Chart Development",
                            "description": "Developed a highly interactive and performance-optimized edge chart for stock market analysis using D3.js and Canvas."
                        },
                        {
                            "title": "App Migration & Upgrade",
                            "description": "Migrated the application from Angular 13 to Angular 18, Ionic 4 to Ionic 6, and upgraded D3.js to version 7 for better performance and maintainability."
                        }
                    ],
                    "impact": [
                        "Improved Core Web Vitals and mobile performance metrics",
                        "Eliminated UI flickering and improved visual stability",
                        "Enhanced application stability by resolving crash issues",
                        "Reduced unnecessary re-renders and improved chart performance",
                        "Standardized storage handling across mobile and web platforms",
                        "Modernized frontend architecture and code quality"
                    ]
                }
            ]
        }
    ];
    const [selectedExperience, setSelectedExperience] = useState(data[1].details[0]);
    const onArcClick = (data) => {
        console.log('click', data)
        setSelectedExperience(data.details[0]);
    }
    return <SideBarLayout header="Experience" setActiveSection={setActiveSection}>
        <section>
            <div className="pie-chart-label">
                {
                    data.map((exp) => {
                        return <div key={exp.label} className="flex-box" onClick={() => setSelectedExperience(exp.details[0])} style={{ cursor: 'pointer' }} >
                            <span className="label-box" style={{ background: exp.color, border: `${selectedExperience.label === exp.label ? 2 : 0}px solid black` }} ></span>
                            <h6 style={{ color: exp.color }}>{exp.label} ({exp.value} yrs)</h6>
                        </div>
                    })
                }
            </div>
            <ExperiencePieChart data={data} color={data.map(exp => exp.color)} width={200} height={200} onClick={onArcClick} selectedExperience={selectedExperience} />
        </section>
        <section>
            <ExperienceDetailsPanel data={selectedExperience} />
        </section>
    </SideBarLayout >

}


const SectionTitle = ({ title, className = '' }) => (
    <h2 className={`text-xl font-bold text-teal-400 mb-4 border-b-2 border-teal-600/50 pb-2 ${className}`}>
        {title}
    </h2>
);

const Chip = ({ text }) => (
    <span className="px-3 py-1 text-xs font-semibold bg-gray-700/50 text-teal-300 rounded-full border border-teal-700/50 hover:bg-teal-900/40 transition duration-200">
        {text}
    </span>
);

// --- Main Panel Component ---

const ExperienceDetailsPanel: React.FC = ({ data }) => {
    return (
        // Outer Container: Semi-transparent, fixed width, modern look
        <div className="w-[295px] bg-black/80 backdrop-blur-md p-4 text-gray-100 h-full overflow-y-auto shadow-2xl border-l-4 border-teal-600/30">

            {/* 1. Header (Company & Role) */}
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-white leading-tight">
                    {data.company}
                </h1>
                <p className="text-2xl font-light text-teal-300 mt-1 card-dis">
                    {data.role}
                </p>
            </header>

            {/* 2. Tech Stack */}
            <section className="mb-10">
                <SectionTitle title="Technology Stack" />
                <div className="flex flex-wrap gap-2">
                    {data.techStack.map((tech) => (
                        <Chip key={tech} text={tech} />
                    ))}
                </div>
            </section>

            {/* 3. Major Contributions (Highlighted Section) */}
            <section className="mb-10 p-5 bg-teal-900/20 rounded-xl border border-teal-700/50">
                <SectionTitle title="Key Achievements" className="text-teal-200 border-teal-500/80" />
                <div className="space-y-4">
                    {data.majorContributions.map((contribution, index) => (
                        <div key={index} className="pl-4 border-l-4 border-teal-400">
                            <h3 className="text-base font-semibold text-white mb-1">
                                {contribution.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                                {contribution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Responsibilities */}
            <section className="mb-10">
                <SectionTitle title="Core Responsibilities" />
                <ul className="space-y-3">
                    {data.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-teal-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{responsibility}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 5. Business Impact */}
            <section className="mb-4">
                <SectionTitle title="Tangible Impact" />
                <ul className="space-y-3 list-disc list-inside text-sm text-gray-300">
                    {data.impact.map((item, index) => (
                        <li key={index} className="pl-2">
                            <span className="text-white font-medium">{item.split(' ')[0]}</span> {item.substring(item.indexOf(' ') + 1)}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Footer/Separator */}
            <div className="w-full h-1 bg-teal-600/40 mt-8 rounded-full"></div>

        </div>
    );
};
export default R3FExperience