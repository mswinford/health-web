import React from "react";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Measurement } from "../hooks/useHealthService";

const dayMonthFormatter = (tick: Date) => {
  const date = new Date(tick);

  return `${date.getMonth()}/${date.getDate()}`;
};

const HeartHealthChart = ({ data }: { data: Measurement[] }) => {
  return (
    <ResponsiveContainer>
      <ComposedChart data={data} barGap={0}>
        <XAxis
          dataKey="datetime"
          tickFormatter={dayMonthFormatter}
          tickLine={false}
        />
        <YAxis type="number" domain={[0, "dataMax"]} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="systolic" fill="#880808" />
        <Bar dataKey="diastolic" fill="#E46363" />
        <Line dataKey="heartRate" type="monotone" strokeWidth={3} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default HeartHealthChart;
