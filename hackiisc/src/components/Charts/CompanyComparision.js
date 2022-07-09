import { ZAxis, Scatter, ScatterChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis, ReferenceLine, ComposedChart, Line } from "recharts";


function CompanyComparision(props) {
    return (
        <ScatterChart width={730} height={400}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="EmpID" name="Employee ID" />
            <YAxis dataKey="Efficiency" name="Efficiency" unit="%" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend/>
            <Scatter name="Employees" data={props.data.data} fill="#8884d8" />
            <ReferenceLine y={props.data.global} label="Global Average" stroke="red" strokeDasharray="3 3" />
            <ReferenceLine y={props.data.branch} label="Branch Average" stroke="green" strokeDasharray="3 3" />
            <ReferenceLine y={props.data.domain} label="Domain Average" stroke="blue" strokeDasharray="3 3" />
        </ScatterChart>
    );
}

export default CompanyComparision