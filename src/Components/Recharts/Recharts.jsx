import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Recharts = () => {
    const studentMarks = [
        { name: "Student A", math: 85, physics: 80, chemistry: 82 },
        { name: "Student B", math: 76, physics: 70, chemistry: 78 },
        { name: "Student C", math: 90, physics: 85, chemistry: 90 },
        { name: "Student D", math: 70, physics: 65, chemistry: 72 },
        { name: "Student E", math: 88, physics: 90, chemistry: 85 },
        { name: "Student F", math: 95, physics: 88, chemistry: 91 },
        { name: "Student G", math: 65, physics: 60, chemistry: 64 },
        { name: "Student H", math: 77, physics: 75, chemistry: 73 },
        { name: "Student I", math: 89, physics: 90, chemistry: 87 },
        { name: "Student J", math: 92, physics: 95, chemistry: 90 }
    ];
    return (
        <div className='py-10'>
            <div>

                <LineChart height={400} width={800} data={studentMarks}>
                    <Line dataKey="math" stroke='red'></Line>
                    <Line dataKey="chemistry" stroke="blue"></Line>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis ></YAxis>

                </LineChart>
            </div>
            <div className='py-5'>
                <LineChart width={800} height={500} data={studentMarks}>
                    <Line dataKey="physics" stroke="orange" ></Line>
                    <Line dataKey="chemistry" stroke='blue'></Line>
                <YAxis dataKey="name" type='category' ></YAxis>
                <XAxis type="number"></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <CartesianGrid></CartesianGrid>
                </LineChart>
            </div>
            <div className='py-5'>
                <AreaChart width={700} height={500} data={studentMarks}>
                
                <Area dataKey="chemistry"></Area>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                
                </AreaChart>
            </div>
            <div className='py-5'>
                <BarChart height={500} width={800} data={studentMarks}>
                    <Bar dataKey="physics" fill='orange'></Bar>
                    <XAxis ></XAxis>
                    <YAxis ></YAxis>
                </BarChart>
            </div>
            <div className='py-5'>
                <ComposedChart height={300} width={800} data={studentMarks}>
                    <Line dataKey="math"></Line>
                    <Bar dataKey="physics"></Bar>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                </ComposedChart>
            </div>
            <div className='py-5'></div>


        </div>
    );
};

export default Recharts;