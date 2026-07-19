
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LabelList
} from "recharts";


function CustomXAxisTick({ x, y, payload }) {
    const words = payload.value.split(" ");

    return (
        <g transform={`translate(${x},${y + 20})`}>
            <text
                textAnchor="middle"
                fontSize={14}
                fill= "#B7A9AE"
            >
                {words.map((word, index) => (
                    <tspan
                        key={index}
                        x="0"
                        dy={index === 0 ? 0 : 14}
                    >
                        {word}
                    </tspan>
                ))}
            </text>
        </g>
    );
}

function BarValueLabel({ x, y, width, value, formatCurrency }) {
    const text = formatCurrency(value);
    const words = text.split(" "); 
    const extraOffset = 8;

    const lineHeight = 13;
    const boxWidth = Math.max(...words.map(w => w.length)) * 7 + 12;
    const boxHeight = words.length * lineHeight + 8;

    return (
        <g transform={`translate(${x + width / 2}, ${y - boxHeight - extraOffset})`}>
            <rect
                x={-boxWidth / 2}
                y={0}
                width={boxWidth}
                height={boxHeight}
                rx={4}
                fill="#241B22"
            />
            <text
                textAnchor="middle"
                fill="#F0E8D8"
                fontSize={13}
            >
                {words.map((word, index) => (
                    <tspan
                        key={index}
                        x="0"
                        dy={index === 0 ? lineHeight : lineHeight}
                    >
                        {word}
                    </tspan>
                ))}
            </text>
        </g>
    );
}


function RevenueBarChart({ data, xLabel, yLabel, formatCurrency }) {

    return (
        <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data} margin={{ top: 40, right: 10, bottom: 50, left: 10 }}>
            

                

                <XAxis
                    dataKey="genre"
                    tick={<CustomXAxisTick />}
                    interval={0}
                    label={{ value: xLabel, position: "bottom", offset: 30, fill: "#B7A9AE" }}
                />

                <Tooltip formatter={(value) => formatCurrency(value)} />

                <Bar dataKey="revenue" radius={[8,8,0,0]} fill="#b05c09" stroke="#b05c09">
                    <LabelList
                        dataKey="revenue"
                        content={(props) => <BarValueLabel {...props} formatCurrency={formatCurrency} />}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default RevenueBarChart;
