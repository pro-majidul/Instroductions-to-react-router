import React from 'react';
import { Treemap } from 'recharts';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie ,Tooltip,} from 'recharts';


const Phones = ({ phone }) => {
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ]
    return (
        <div className='py-5'>
            <div className='py-5'>

                <Treemap data={phone} dataKey="price" width={1200} height={400}></Treemap>
            </div>
            <div className='py-5'>
                <ResponsiveContainer width="100%" height={300}>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="110%" barSize={100} data={phone}>
                        <RadialBar
                            minAngle={50}
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            clockWise
                            dataKey="price"
                        />
                        <Legend iconSize={1} layout="vertical" verticalAlign="middle" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="price"
                        isAnimationActive={false}
                        data={phone}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Phones;