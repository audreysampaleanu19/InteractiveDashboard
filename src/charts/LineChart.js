import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";


function RevenueLineChart({ data, xLabel, yLabel, formatCurrency }) {

    return (
        <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data} margin={{ top: 40, right: 20, bottom: 50, left: 30 }}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                    dataKey="year"
                    tick={{ fill: "#B7A9AE", fontSize: 14 }}
                    padding={{ left: 20, right: 40 }}
                    interval={0}
                    label={{ value: xLabel, position: "bottom", offset: 30, fill: "#B7A9AE" }}
                />

                <YAxis
                    tick={{ fill: "#B7A9AE" }}
                    label={{ value: yLabel, angle: -90, position: "insideLeft", fill: "#B7A9AE", offset: -20, dy: 60 }}
                />

                <Tooltip formatter={(value) => formatCurrency(value)} contentStyle={{ color: "#060606" }} />

                <Line type="monotone" dataKey="revenue" fill="#914b05" stroke="#b05c09" strokeWidth={3} dot={{ r: 5 }} />

            </LineChart>
        </ResponsiveContainer>
    );
}

export default RevenueLineChart;