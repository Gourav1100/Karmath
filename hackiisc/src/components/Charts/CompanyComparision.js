import { ZAxis, Scatter, ScatterChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis, ReferenceLine, ComposedChart, Line } from "recharts";


function CompanyComparision(props) {
    let complb = `Company Average(${props.data.company}%)`
    let brlb = `Branch Average(${props.data.branch}%)`
    return (
        <ScatterChart width={730} height={400}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="EmpID" name="Employee ID" tick={false} />
            <YAxis dataKey="Efficiency" name="Efficiency" unit="%" />
            <Legend />
            <Tooltip />
            <Scatter name="Employees" data={props.data.data} fill="#8884d8" />
            <ReferenceLine y={props.data.company} label={complb} stroke="red" strokeDasharray="3 3" />
            <ReferenceLine y={props.data.branch} label={brlb} stroke="green" strokeDasharray="3 3" />
        </ScatterChart>
    );
}

export default CompanyComparision