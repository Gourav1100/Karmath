import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { ZAxis, Scatter, ScatterChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ "background-color": "#FFFFFF", padding: 5, paddingTop: 0, paddingBottom: 0, border: "thin solid rgb(204, 204, 204)", fontSize: 12 }}>
                <p className="label" style={{ fontWeight: "bold" }}>{payload[0].value}</p>
                <p>{`Efficiency: ${payload[1].value}%`}</p>
            </div>
        );
    }
    return null;
}

function EfficiencyComparision(props) {
    const data01 = [
        {
            "x": 100,
            "y": 200,
            "z": 200
        },
        {
            "x": 120,
            "y": 100,
            "z": 260
        },
        {
            "x": 170,
            "y": 300,
            "z": 400
        },
        {
            "x": 140,
            "y": 250,
            "z": 280
        },
        {
            "x": 150,
            "y": 400,
            "z": 500
        },
        {
            "x": 110,
            "y": 280,
            "z": 200
        }
    ];
    const data02 = [
        {
            "x": 200,
            "y": 260,
            "z": 240
        },
        {
            "x": 240,
            "y": 290,
            "z": 220
        },
        {
            "x": 190,
            "y": 290,
            "z": 250
        },
        {
            "x": 198,
            "y": 250,
            "z": 210
        },
        {
            "x": 180,
            "y": 280,
            "z": 260
        },
        {
            "x": 210,
            "y": 220,
            "z": 230
        }
    ];
    const data03 = [
        {
            Efficiency: 50.34,
            EmpID: "BadMan",
        },
        {
            Efficiency: 57.34,
            EmpID: "GoodMan",
        },
        {
            Efficiency: 40.65,
            EmpID: "GreatMan",
        },
        {
            Efficiency: 78.94,
            EmpID: "DeadMan",
        },
    ]
    const you = [
        {
            Efficiency: 78.94,
            EmpID: "DeadMan",
            rng : 5
        }
    ] 
    return (
        <ScatterChart width={730} height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="EmpID" name="Employee ID" allowDuplicatedCategory={false} tick={false} />
            <YAxis dataKey="Efficiency" name="Efficiency" unit="%" />
            <ZAxis dataKey="rng" name="score" range={[64, 200]} />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <Scatter name="A school" data={data03} fill="#8884d8" />
            <Scatter name="You" data={you} fill="#ff0f0f"/>
        </ScatterChart>
    );
}
export default EfficiencyComparision;