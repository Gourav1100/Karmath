import { LineChart, Line, Legend, CartesianGrid, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";

const dateFormat = (tick) => {
    const dt = new Date(tick);
    return dt.toLocaleDateString();
}

function EfficiencyHistory(props) {
    let avgstr = "Average(" + props.data.avg + "%)";
    return (
        <LineChart width={730} height={250}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={props.data.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={dateFormat} />
            <YAxis />
            <Tooltip labelFormatter={dateFormat} />
            <Legend />
            <Line type="monotone" dataKey="Efficiency" stroke="#8884d8" />
            <ReferenceLine y={props.data.avg} label={avgstr} />
        </LineChart>
    );
}



export default EfficiencyHistory;
