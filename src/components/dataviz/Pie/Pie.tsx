import { useCallback, useMemo } from "react";
import * as d3 from "d3";

const INNER_RADIUS = 60;
const STROKE_COLOR = "black";
const STROKE_WIDTH = 2;

interface MajorContribution {
    title: string;
    description: string;
}

interface DetailItem {
    company: string;
    label: string;
    role: string;
    techStack: string[];
    responsibilities: string[];
    majorContributions: MajorContribution[];
    impact: string[];
    experienceValue: string; // new field for numeric experience value
    experience: string; // optional (exists only in some cases)
}

interface ExperienceDataItem {
    label: string;
    value: number;
    color: string;
    details: DetailItem[];
}

type ExperienceData = ExperienceDataItem[];


const ExperiencePieChart = ({
    data,
    color,
    width,
    height,
    onClick,
    selectedExperience,
}: { data: ExperienceData, color: Array<string>, width: number, height: number, onClick: (data: ExperienceDataItem) => void, selectedExperience: ExperienceDataItem }) => {
    /* ---------- Derived values ---------- */
    const radius = useMemo(
        () => Math.min(width, height) / 2,
        [width, height]
    );
    const totalExperience = useMemo(() => {
        return data.reduce((sum, item) => sum + item.value, 0);
    }, [data])
    /* ---------- Color scale ---------- */
    const colorScale = useMemo(
        () =>
            d3
                .scaleOrdinal()
                .domain(data.map(d => d.label))
                .range(color),
        [data, color]
    );

    /* ---------- Pie generator ---------- */
    const pieGenerator = useMemo(
        () =>
            d3
                .pie()
                .value((d: any) => d.value)
                .sort(null),
        []
    );

    /* ---------- Arc generator ---------- */
    const arcGenerator = useMemo(
        () =>
            d3
                .arc()
                .innerRadius(INNER_RADIUS)
                .outerRadius(radius - 10),
        [radius]
    );

    /* ---------- Computed arcs ---------- */
    const arcs = useMemo(
        () => pieGenerator(data as any),
        [data, pieGenerator]
    );

    /* ---------- Click handler ---------- */
    const handleSliceClick = useCallback(
        (arcData: d3.PieArcDatum<ExperienceDataItem>) => {
            onClick?.(arcData.data);
        },
        [onClick]
    );

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {arcs.map((d: any) => {
                    const isSelected =
                        selectedExperience?.label === d.data.label;

                    return (
                        <path
                            key={d.data.label}
                            d={arcGenerator(d as any) as string}
                            fill={colorScale(d.data.label) as any}
                            stroke={isSelected ? STROKE_COLOR : "none"}
                            strokeWidth={isSelected ? STROKE_WIDTH : 0}
                            onClick={() => handleSliceClick(d)}
                            style={{ cursor: "pointer" }}
                        />
                    );
                })}

                {/* Center text */}
                <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={14}
                    fontWeight={600}
                >
                    Total
                </text>
                <text
                    y={18}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={16}
                    fontWeight={700}
                >
                    {totalExperience} yrs
                </text>
            </g>
        </svg>
    );
};

export default ExperiencePieChart;
