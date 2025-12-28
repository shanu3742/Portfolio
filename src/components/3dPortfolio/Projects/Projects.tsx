
import { Html } from "@react-three/drei"
import { motion } from 'framer-motion';
import R3Button from "../../R3Button/R3Button"
import './Projects.css'
import { createPortal } from "react-dom"
import { useR3FPortfolio } from "../R3Context"
import SideBarLayout from "../layout"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useState } from "react";
const R3FProjects = () => {
    const { activeSection, setActiveSection } = useR3FPortfolio() as any
    const portalRoot = document.getElementById("portfolio-view")

    return (
        <>
            {activeSection === 'projects' && portalRoot && (
                <Html>
                    {createPortal(<ProjectsContent setActiveSection={setActiveSection} />, portalRoot)}
                </Html>
            )}

            <R3Button
                text="Projects"
                isStreetLight={false}
                boxFactor={9}
                position={[-34, 0, 5]}
                color="#8FAFB8"
                hoverColor="#A8C6CF"
                onClick={() => {

                    setActiveSection('projects')

                }}
            />
        </>
    )
}




const ProjectsContent = ({ setActiveSection }: any) => {

    return <SideBarLayout header="Projects" setActiveSection={setActiveSection}>
        <ProjectSection />
    </SideBarLayout>
}




const ProjectSection = () => {
    const projects = [
        {
            "id": "stockedge",
            "title": "StockEdge",
            "role": "Frontend Developer",
            "description": "Contributing to India's premier equity research and analytics platform. Focused on building high-performance financial data visualizations and seamless user experiences for stock market investors.",
            "images": [
                "/portfolio/project/stockedge/edge-chart.png",
                "/portfolio/project/stockedge/ms.png",
                "/portfolio/project/stockedge/ms-price.png",
                "/portfolio/project/stockedge/score.png",
                "/portfolio/project/stockedge/lollipop.jpg",
                "/portfolio/project/stockedge/market.png",
                "/portfolio/project/stockedge/fii-dii-light.png",
                "/portfolio/project/stockedge/chart-pattern.png",
                "/portfolio/project/stockedge/technical.png",
                "/portfolio/project/stockedge/option-chain.png",
                "/portfolio/project/stockedge/price.png",
                "/portfolio/project/stockedge/major.png",
                "/portfolio/project/stockedge/futureoi.png",
                "/portfolio/project/stockedge/calender.png",
            ],
            "tags": ["Angular", "d3.js", "Ionic", "Capacitor", "Financial Tech", "TypeScript", "JavaScript", "CSS", "SCSS", "HTML5"],
            "sceneId": "scene_stockedge",
            "links": {
                "live": "https://web.stockedge.com",
            }
        },
        {
            "id": "Curry Company",
            "title": "Curry Company",
            "role": "Full Stack Developer",
            "description": "Developed core features for the Aarth ecosystem, focusing on connecting users with financial insights through intuitive UI and robust backend integration.",
            "images": [
                "/portfolio/project/curry-company/home.png",
            ],
            "tags": ["Next.js", "Node.js", "d3.js", "HTML5", "React", "Tailwind", "Material UI", "d3-force", "CSS", "SCSS", "JavaScript", "TypeScript"],
            "sceneId": "scene_aarth",
            "links": {
                "live": "https://curry-company.eccenca.com/home"
            }
        },
        {
            "id": "fresh-pick",
            "title": "Fresh Pick Application",
            "role": "Lead Developer",
            "description": "An end-to-end e-commerce solution for fresh produce. Features include real-time inventory tracking, secure payment gateways, and a smooth mobile-responsive ordering flow.",
            "images": [
                "/portfolio/project/fresh-pic/home.png",
                "/portfolio/project/fresh-pic/product.png",
                "/portfolio/project/fresh-pic/product-details.jpg",
                "/portfolio/project/fresh-pic/profile.jpg",
            ],
            "tags": ["Angular", "Ionic", "Tailwind", "TypeScript", "JavaScript", "CSS", "SCSS", "HTML5"],
            "sceneId": "scene_freshpick",
            "links": {}
        },
        {
            "id": "sparql-builder",
            "title": "SPARQL Query Builder",
            "role": "Software Engineer",
            "description": "A specialized tool designed to simplify complex semantic web queries. Built a visual interface that generates SPARQL syntax dynamically, making RDF databases accessible to non-experts.",
            "images": [
                "/portfolio/project/querryeditor/editor.png",
            ],
            "tags": ["TypeScript", "JavaScript", "React", "CSS", "SCSS", "HTML5"],
            "sceneId": "scene_sparql",
            "links": {}
        }
    ]
    const [selectedImage, setSelectedImage] = useState('');
    const [projectIndex, setProjectIndex] = useState(null);

    const onImageviewOpen = (img: any, pIdx: any) => {
        if (window.innerWidth < 768) return;
        setSelectedImage(img);
        setProjectIndex(pIdx);
    };

    const onImageviewClose = () => {
        setSelectedImage('');
        setProjectIndex(null);
    };

    const slideUpdate = (swiper: any, cprojectIndex: any) => {
        // ONLY update the global preview if the project being swiped 
        // is the one currently being hovered by the user
        if (projectIndex === cprojectIndex) {
            const newImage = projects[cprojectIndex].images[swiper.activeIndex];
            setSelectedImage(newImage);
        }
    };


    return (
        <section className="p-1 bg-transparent text-white">
            <div className="flex flex-col gap-8">
                {projects.map((project, pIndex) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden bg-gradient-to-b from-[#1a2c2c] to-[#0f1717] border border-white/10 rounded-2xl shadow-2xl flex flex-col"
                    >
                        {/* 1. Image Slider at the TOP */}
                        <div className="w-full h-56  relative border-b border-white/10">
                            <Swiper
                                modules={[Pagination, Navigation, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 4000 }}
                                className="w-full h-full"
                                onSlideChange={(swiper) => slideUpdate(swiper, pIndex)}
                            >
                                {project.images?.map((img, index) => (
                                    <SwiperSlide key={index} >
                                        <img
                                            src={img}
                                            alt={project.title}
                                            className="w-[350px] h-56 object-cover"
                                            onMouseEnter={() => onImageviewOpen(img, pIndex)}
                                            onMouseLeave={onImageviewClose}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* 2. Content Section Below Image */}
                        <div className="p-6 relative">
                            {/* Teal Accent Bar (Positioned specifically for the text area) */}
                            <div className="absolute left-0 top-6 bottom-6 w-1 bg-cyan-400 rounded-r-full shadow-[0_0_8px_rgba(45,212,191,0.6)]" />

                            <div className="pl-4">
                                <h3 className="text-2xl font-bold text-cyan-400 border-b border-white/10 pb-2 mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1 text-xs font-semibold bg-[#142626] text-cyan-300 rounded-full border border-cyan-900 hover:border-cyan-400 transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <>
                {
                    selectedImage && createPortal(<ImageModel image={selectedImage} />, document.body)

                }
            </>
        </section>
    );
};

const ImageModel = ({ image }: any) => {
    return <div className="fixed inset-0 z-50 flex items-center justify-end 
                        bg-black/50 backdrop-blur-sm">
        <div className="w-3/4 h-3/4">
            <img src={image} alt="Project Image" className="w-full h-full object-contain rounded-xl" />
        </div>
    </div>
}
export default R3FProjects