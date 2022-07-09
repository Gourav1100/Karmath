import logo from './logo.svg';
import './App.css';
import { LineChart, Line, Legend, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const dateFormat = (tick) => {
    const dt = new Date(tick);
    return dt.toLocaleDateString();
}

function EfficiencyHistory(props) {
    let avg = [];
    for (let i = 0; i < props.data.length; i++) {
        let obj = {
            date: props.data[i].date,
            Average: props.avg
        };
        avg.push(obj);
    }
    return (
        <LineChart width={730} height={250}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis xAxisId={"data"} dataKey="date" tickFormatter={dateFormat} />
            <XAxis xAxisId={"avg"} dataKey="date" hide={true} />
            <YAxis />
            <Tooltip labelFormatter={dateFormat} />
            <Legend />
            <Line xAxisId={"data"} type="monotone" data={props.data} dataKey="Efficiency" stroke="#8884d8" />
            <Line xAxisId={"avg"} type="monotone" data={avg} dataKey="Average" stroke="#82ca9d" />
        </LineChart>
    );
}



export default EfficiencyHistory;
