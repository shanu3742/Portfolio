import React from "react";
import * as d3 from "d3";

const ExperiencePieChart = ({ data, color, width, height, onClick, selectedExperience }) => {
    const radius = Math.min(width, height) / 2;
    const colors = d3.scaleOrdinal()
        .domain(data.map(d => d.label))
        .range(color);

    // Create pie generator
    const pie = d3.pie()
        .value(d => d.value)
        .sort(null);

    // Create arc generator
    const arc = d3.arc()
        .innerRadius(60)   // donut chart
        .outerRadius(radius - 10);

    // Label arc (not used in the slice path, but kept for completeness if needed)
    // const labelArc = d3.arc()
    //     .innerRadius(radius - 40)
    //     .outerRadius(radius - 40);

    const arcs = pie(data);

    const onPathClick = (lable) => {
        if (onClick) {
            onClick(lable.data)
        }
    }

    // Define the stroke properties for the selected slice
    const selectedStrokeColor = 'black'; // Choose your desired stroke color
    const selectedStrokeWidth = '2px';   // Choose your desired stroke width

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {arcs.map((d, i) => {
                    const isSelected = selectedExperience && selectedExperience.label === d.data.label;
                    return (
                        <g key={i} onClick={() => onPathClick(d)}>
                            {/* Slice */}
                            <path
                                d={arc(d)}
                                // Apply stroke if selected, otherwise 'none'
                                stroke={isSelected ? selectedStrokeColor : 'none'}
                                // Apply stroke width if selected, otherwise '0'
                                strokeWidth={isSelected ? selectedStrokeWidth : '0'}
                                fill={colors(d.data.label)}
                                style={{ cursor: 'pointer' }}
                            />
                        </g>
                    );
                })}

                {/* Center text */}
                <text
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="14"
                    fontWeight="600"
                >
                    Total
                </text>
                <text
                    y="18"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="16"
                    fontWeight="700"
                >
                    4.7 yrs
                </text>
            </g>
        </svg >
    );
};

export default ExperiencePieChart;