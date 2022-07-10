import React from 'react';
import ReactDOM from 'react-dom/client';
import { ZAxis, Scatter, ScatterChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ "background-color": "#FFFFFF", padding: 5, paddingTop: 0, paddingBottom: 0, border: "thin solid rgb(204, 204, 204)", fontSize: 12 }}>
                <p>{`Efficiency: ${payload[1].value}%`}</p>
            </div>
        );
    }
    return null;
}

function EfficiencyComparision(props) {
    return (
        <ScatterChart width={730} height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="EmpID" name="Employee ID" allowDuplicatedCategory={false} tick={false} type="number" />
            <YAxis dataKey="Efficiency" name="Efficiency" unit="%" />
            <ZAxis dataKey="rng" name="score" range={[64, 400]} />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <Scatter name="Company Data" data={props.data.data} fill="#8884d8" />
            <Scatter name="you" data={props.data.you} fill="#ff0f0f" />
        </ScatterChart>
    );
}
export default EfficiencyComparision;
