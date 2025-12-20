
import { Html } from "@react-three/drei"
import R3Button from "../../R3Button/R3Button"
import './Skill.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import SideBarLayout from "../layout"
import TreeMap from "../../dataviz/TreeMap/TreeMap"
import { useState } from "react"
import { SectionTitle } from "../Experience/Experience"
const skillData = {
    name: "Skills",
    children: [
        {
            name: "Frontend",
            color: "rgba(255, 183, 140, 0.55)",
            "stroke-color": "rgba(255, 145, 95, 0.9)",
            details: [
                "I began my journey into frontend development by learning HTML and CSS through Coursera, where I also got introduced to Git and GitHub for version control.",
                "After building a strong foundation, I learned the basics of JavaScript using YouTube tutorials and Coursera courses, focusing on core concepts and practical usage.",
                "My first professional break came when I secured a React internship through Internshala, where I worked on real-world React applications and strengthened my component-based thinking.",
                "After the internship, I joined Aarth.io as a Frontend Engineer, where I worked on a client project called Curry Company for the client ECCenca.",
                "Based on my performance and contributions in the Curry Company project, I received a high contribution award and was entrusted with another project from the same client called Query Builder.",
                "The Query Builder project required building the application using React with TypeScript, which motivated me to start learning TypeScript and adopt strongly typed frontend development practices.",
                "In the Curry Company application, various types of data visualizations were used, and as a fresher developer, my responsibility was to learn D3.js and D3 force graphs and implement them into the application.",
                "The application also required authentication, and since there was no backend team at the time, I learned Firebase and implemented authentication and notification services using Firebase.",
                "One of the major challenges was a network graph containing more than 1000 nodes, which caused performance bottlenecks in the browser.",
                "To solve this, I explored Canvas rendering and PixiJS, learned how to use Web Workers, and moved heavy physics simulations off the main thread to significantly improve performance.",
                "After Aarth.io, I joined StockEdge as a Software Engineer, where the tech stack primarily involved Angular, Ionic, and Capacitor for hybrid application development.",
                "My main responsibility at StockEdge was maintaining and improving legacy charting code, optimizing graph performance, and enhancing overall application performance.",
                "I was responsible for implementing new custom graphs required by the application and integrating Swiper.js on the home page for better user interaction.",
                "I also resolved a major theme change blinking issue and worked on improving the user experience across the application.",
                "Recently, I worked on reducing the Cumulative Layout Shift (CLS) of the application to 0.1, significantly improving performance and user experience metrics.",
                "I was also involved in migrating the application from Angular 13 to Angular 17, ensuring stability, performance improvements, and compatibility.",
                "Alongside my professional work, I recently started learning Next.js, focusing on server and client components, caching strategies, and performance optimization.",
                "Apart from this, I have a strong interest in 3D on the web and started learning Three.js and React Three Fiber along with the Rapier physics library.",
                "I am currently building my portfolio using React Three Fiber to combine interactive 3D experiences with modern frontend development."
            ],
            children: [
                { name: "React", rating: 9 },
                { name: "Angular", rating: 7 },
                { name: "Ionic", rating: 6 },
                { name: "Redux", rating: 6 },
                { name: "TypeScript", rating: 7 },
                { name: "JavaScript", rating: 7 },
                { name: "Three.js", rating: 5 },
                { name: "HTML5", rating: 9 },
                { name: "CSS3", rating: 9 },
                { name: "SCSS", rating: 7 },
                { name: "Tailwind", rating: 6 },
                { name: "ES6+", rating: 8 },
                { name: "React Three Fiber", rating: 5 },
                { name: "React Three Rapier", rating: 5 },
            ]
        },
        {
            name: "Backend",
            color: "rgba(140, 190, 210, 0.55)",
            "stroke-color": "rgba(90, 160, 190, 0.9)",
            details: [
                "I started learning backend development during my college days, where I was first introduced to Node.js and server-side JavaScript concepts.",
                "To strengthen my fundamentals, I completed structured Node.js and backend courses from Udemy, focusing on APIs, authentication, and database integration.",
                "During my time at Aarth.io, I took ownership of backend responsibilities and built backend services using Node.js along with Firebase for authentication and MongoDB for data storage.",
                "While working at Aarth.io, I designed and implemented REST APIs that supported real-world frontend requirements and handled user data, roles, and permissions.",
                "To deepen my backend knowledge, I joined the UpGrad Full Stack Development bootcamp, where I learned core backend development principles and system design concepts.",
                "As part of the bootcamp, I studied clean code practices, scalable architecture, and performance-oriented backend development.",
                "Using these learnings, I built a full-stack blogging application where I designed the backend APIs, database schema, and authentication flow.",
                "Later, I developed a full-stack grocery management application using Node.js, Express, MongoDB, and Redis to handle inventory, users, and caching efficiently.",
                "Through these projects, I gained hands-on experience in designing scalable backend systems and optimizing API performance.",
                "Recently, I started exploring microservices architecture, learning how to break monolithic applications into independent services and understand service-to-service communication."
            ],
            children: [
                { name: "Node.js", rating: 8 },
                { name: "Express.js", rating: 8 },
                { name: "MongoDB", rating: 6 },
                { name: "JWT", rating: 6 },
                { name: "bcryptjs", rating: 6 },
                { name: "Mongoose", rating: 7 },
                { name: "Auth", rating: 9 },
                { name: "Redis", rating: 7 },
                { name: "API", rating: 8 },
                { name: "Payments", rating: 8 },
                { name: "Docker", rating: 7 }
            ]
        },
        {
            name: "Data Visualization",
            color: "rgba(160, 210, 170, 0.55)",
            "stroke-color": "rgba(110, 180, 140, 0.9)",
            details: [
                "Data visualization became a core part of my professional work during my early projects, where I realized that visual clarity is as important as raw data.",
                "At Aarth.io, I spent significant time working with complex data-driven interfaces, where I was required to learn and implement D3.js from scratch.",
                "I worked extensively on interactive charts, custom SVG-based visualizations, and force-directed graphs to represent relational data in an intuitive way.",
                "One of the major challenges involved rendering and managing network graphs with more than 1000 nodes, which pushed browser performance to its limits.",
                "To solve performance issues, I explored Canvas-based rendering, PixiJS, and optimized D3 force simulations to reduce load on the main thread.",
                "I learned to offload heavy computations using Web Workers, significantly improving frame rates and overall interaction smoothness.",
                "At StockEdge, data visualization continued to be a key responsibility, where I worked on maintaining and optimizing legacy charting systems.",
                "I focused on improving chart performance, reducing re-render costs, and enhancing user interaction for large datasets on both web and mobile platforms.",
                "I implemented new custom visualizations based on product requirements, ensuring accuracy, performance, and a smooth user experience.",
                "Through continuous iteration and real-world usage, I developed a strong understanding of when to use SVG, Canvas, or hybrid rendering approaches.",
                "My experience across both companies helped me build an intuition for designing scalable, high-performance visualizations that remain readable and responsive.",
                "Today, data visualization is one of my strongest skills, combining technical depth with a focus on user experience and performance optimization."
            ],
            children: [
                { name: "D3.js", rating: 9 },
                { name: "SVG", rating: 9 },
                { name: "Canvas API", rating: 6 },
                { name: "D3-Force", rating: 7 },
                { name: "Recharts", rating: 9 },
                { name: "ECharts", rating: 6 },
                { name: "Chart.js", rating: 6 },
                { name: "Konva.js", rating: 6 },
                { name: "Highcharts", rating: 6 },

            ]
        },
        {
            name: "Ai & Future Explorations",
            color: "rgba(190, 170, 235, 0.55)",
            "stroke-color": "rgba(140, 120, 210, 0.9)",
            details: [
                "I started learning about AI by exploring agentic AI concepts and AI workflow design through structured courses on Udemy and LinkedIn Learning.",
                "During this learning phase, I focused on understanding how autonomous agents plan tasks, make decisions, and interact with external tools and data sources.",
                "To apply these concepts practically, I built an automated blogging application powered by AI agents.",
                "The application fetches blog content from the web for a specific topic and processes it through a structured AI workflow.",
                "I designed the workflow to analyze the fetched content, apply contextual improvements, and optimize it for clarity, structure, and readability.",
                "The processed content is then restructured to match a predefined blog format and example structure used across my own blogging system.",
                "To enable reliable AI processing, I implemented text splitting and chunking strategies to handle large inputs efficiently.",
                "I used LangChain to orchestrate the agent workflows and manage prompt execution across different stages of the pipeline.",
                "For web content extraction, I integrated Chairo to fetch and clean structured data from web sources.",
                "The final optimized blog content is stored in a database, making the entire pipeline fully automated from data extraction to persistence.",
                "Through this project, I gained hands-on experience in building end-to-end agentic AI systems that combine data ingestion, transformation, optimization, and storage.",
                "I am continuing to expand my knowledge in agentic AI, AI-driven automation, and scalable AI workflows for real-world applications."
            ],
            children: [
                { name: "OpenAI API", rating: 6 },
                { name: "Hugging Face", rating: 5 },
                { name: "LangChain", rating: 5 },
                { name: "RAG Pipeline", rating: 4 },
                { name: "Vector Databases", rating: 5 },
                { name: "Agentic AI", rating: 5 },
                { name: "Text Splitting & Embedding", rating: 5 },
                { name: "Chrio (Web Extraction)", rating: 5 },

            ]
        }
    ]
}
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
        <TreeMap data={skillData} onClick={(data) => setSelectedStack(data)} />
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