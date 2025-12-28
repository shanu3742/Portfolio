import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./Treemap.css";

;



export default function TreeMap({ data, width = 280, height = 300, onClick }: any) {
    const svgRef = useRef(null);
    const tooltipRef = useRef(null);

    const [currentData, setCurrentData] = useState(data);
    const [isDetail, setIsDetail] = useState(false);

    useEffect(() => {
        drawTreemap(currentData, isDetail);
    }, [currentData, isDetail]);

    const drawTreemap = (data: any, detail: any) => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const root = d3
            .hierarchy(data)
            .sum(d => d.rating)
            .sort((a: any, b: any) => b.value - a.value);

        d3
            .treemap()
            .size([width, height])
            .paddingInner(2)
            .round(true)(root);

        const nodes = detail ? root.leaves() : root.children;

        const tooltip = d3.select(tooltipRef.current);

        const cells = svg
            .selectAll("g")
            .data(nodes as any)
            .join("g")
            .attr("transform", (d: any) => `translate(${d.x0},${d.y0})`);

        cells
            .append("rect")
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("class", "tile")
            .attr("width", (d: any) => d.x1 - d.x0)
            .attr("height", (d: any) => d.y1 - d.y0)
            .attr("fill", (d: any) => (detail ? d.parent.data.color : d.data.color))
            .attr("opacity", 0.9)
            .attr("stroke", (d: any) =>
                detail ? d.parent.data["stroke-color"] : d.data["stroke-color"]
            )
            .attr("stroke-width", 2)
            .attr("filter", (d: any) => {
                const c = detail
                    ? d.parent.data["stroke-color"]
                    : d.data["stroke-color"];
                return `drop-shadow(0 0 8px ${c}55)`;
            })
            .on("mousemove", (event, d: any) => {
                tooltip
                    .style("opacity", 1)
                    .html(`<strong>${d.data.name}</strong><br/>Total Points: ${d.value}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 10 + "px");
            })
            .on("mouseout", () => tooltip.style("opacity", 0))
            .on("click", (_, d: any) => {
                if (!detail) {
                    setCurrentData(d.data);
                    if (onClick) {
                        onClick(d.data)
                    }

                    setIsDetail(true);
                }
            });

        cells.append("text")
            .attr("class", "label")
            .attr("text-anchor", "middle")
            .attr("fill", (d: any) =>
                detail ? d.parent.data["stroke-color"] : d.data["stroke-color"]
            )
            .style("font-size", (d: any) => {
                const w = d.x1 - d.x0;
                return Math.min(w / 7, 16) + "px";
            })
            .style("pointer-events", "none")
            .each(function (d: any) {
                const text = d3.select(this);
                const words = d.data.name.split(" ");
                const width = d.x1 - d.x0;
                const height = d.y1 - d.y0;

                const lineHeight = 1.1; // ems
                const maxLines = Math.floor(height / 14);

                let line = [];
                let lineNumber = 0;
                let tspan = text.append("tspan") as any;

                text
                    .attr("x", width / 2)
                    .attr("y", height / 2)
                    .attr("dy", "0.35em");

                for (let i = 0; i < words.length; i++) {
                    line.push(words[i]);
                    tspan.text(line.join(" "));

                    if (tspan.node().getComputedTextLength() > width - 12) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [words[i]];

                        lineNumber++;
                        if (lineNumber >= maxLines) break;

                        tspan = text.append("tspan")
                            .attr("x", width / 2)
                            .attr("dy", lineHeight + "em")
                            .text(words[i]);
                    }
                }

                // vertically center multiline text
                const tspans = text.selectAll("tspan");
                const totalHeight = tspans.size() * 14;
                tspans.attr("dy", (i) =>
                    i === 0 ? `-${totalHeight / 2 - 7}px` : "1.1em"
                );
            })
            .style("opacity", (d: any) => (d.x1 - d.x0 > 40 ? 1 : 0));

    };

    return (
        <div className="container">
            <button
                className="back-btn"
                style={{ visibility: isDetail ? "visible" : "hidden" }}
                onClick={() => {
                    setCurrentData(data);
                    setIsDetail(false);
                }}
            >
                ← Return to Categories
            </button>

            <div id="chart">
                <svg ref={svgRef} width={width} height={height} />
            </div>

            <div ref={tooltipRef} className="tooltip" />
        </div>
    );
}
