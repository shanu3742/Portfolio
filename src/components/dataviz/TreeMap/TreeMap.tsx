import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./Treemap.css";

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
                { name: "Angular", rating: 9 },
                { name: "React", rating: 9 },
                { name: "TS", rating: 8 },
                { name: "Tailwind", rating: 9 },
                { name: "Three.js", rating: 7 },
                { name: "Ionic", rating: 8 },
                { name: "Redux", rating: 8 },
                { name: "ES6+", rating: 10 }
            ]
        },
        {
            name: "Backend",
            color: "rgba(140, 190, 210, 0.55)",
            "stroke-color": "rgba(90, 160, 190, 0.9)",
            details: [],
            children: [
                { name: "Node.js", rating: 8 },
                { name: "MongoDB", rating: 8 },
                { name: "Auth", rating: 9 },
                { name: "Docker", rating: 7 },
                { name: "Redis", rating: 7 },
                { name: "API", rating: 8 },
                { name: "Payments", rating: 8 }
            ]
        },
        {
            name: "Data & AI",
            color: "rgba(160, 210, 170, 0.55)",
            "stroke-color": "rgba(110, 180, 140, 0.9)",
            details: [],
            children: [
                { name: "D3.js", rating: 9 },
                { name: "SVG", rating: 9 },
                { name: "OpenAI", rating: 6 },
                { name: "LangChain", rating: 6 },
                { name: "RAG", rating: 5 },
                { name: "Agents", rating: 4 }
            ]
        }
    ]
};

const WIDTH = 280;
const HEIGHT = 300;

export default function TreeMap({ onClick }) {
    const svgRef = useRef(null);
    const tooltipRef = useRef(null);

    const [currentData, setCurrentData] = useState(skillData);
    const [isDetail, setIsDetail] = useState(false);

    useEffect(() => {
        drawTreemap(currentData, isDetail);
    }, [currentData, isDetail]);

    const drawTreemap = (data, detail) => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const root = d3
            .hierarchy(data)
            .sum(d => d.rating)
            .sort((a, b) => b.value - a.value);

        d3
            .treemap()
            .size([WIDTH, HEIGHT])
            .paddingInner(2)
            .round(true)(root);

        const nodes = detail ? root.leaves() : root.children;

        const tooltip = d3.select(tooltipRef.current);

        const cells = svg
            .selectAll("g")
            .data(nodes)
            .join("g")
            .attr("transform", d => `translate(${d.x0},${d.y0})`);

        cells
            .append("rect")
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("class", "tile")
            .attr("width", d => d.x1 - d.x0)
            .attr("height", d => d.y1 - d.y0)
            .attr("fill", d => (detail ? d.parent.data.color : d.data.color))
            .attr("opacity", 0.9)
            .attr("stroke", d =>
                detail ? d.parent.data["stroke-color"] : d.data["stroke-color"]
            )
            .attr("stroke-width", 2)
            .attr("filter", d => {
                const c = detail
                    ? d.parent.data["stroke-color"]
                    : d.data["stroke-color"];
                return `drop-shadow(0 0 8px ${c}55)`;
            })
            .on("mousemove", (event, d) => {
                tooltip
                    .style("opacity", 1)
                    .html(`<strong>${d.data.name}</strong><br/>Total Points: ${d.value}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 10 + "px");
            })
            .on("mouseout", () => tooltip.style("opacity", 0))
            .on("click", (_, d) => {
                if (!detail) {
                    setCurrentData(d.data);
                    if (onClick) {
                        onClick(d.data)
                    }

                    setIsDetail(true);
                }
            });

        cells
            .append("text")
            .attr("class", "label")
            .attr("x", d => (d.x1 - d.x0) / 2)
            .attr("y", d => (d.y1 - d.y0) / 2)
            .attr("fill", d =>
                detail ? d.parent.data["stroke-color"] : d.data["stroke-color"]
            )
            .text(d => d.data.name)
            .style("font-size", d => {
                const w = d.x1 - d.x0;
                return Math.min(w / 6, 16) + "px";
            })
            .style("opacity", d => (d.x1 - d.x0 > 40 ? 1 : 0));
    };

    return (
        <div className="container">
            <button
                className="back-btn"
                style={{ visibility: isDetail ? "visible" : "hidden" }}
                onClick={() => {
                    setCurrentData(skillData);
                    setIsDetail(false);
                }}
            >
                ← Return to Categories
            </button>

            <div id="chart">
                <svg ref={svgRef} width={WIDTH} height={HEIGHT} />
            </div>

            <div ref={tooltipRef} className="tooltip" />
        </div>
    );
}
