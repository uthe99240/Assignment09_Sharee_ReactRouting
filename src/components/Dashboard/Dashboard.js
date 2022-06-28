import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import Header from '../Header/Header';

const Dashboard = () => {

    const [charts, setChart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-2 gap-4 m-10'>
                <div>
                    <h1 className='text-3xl font-semibold mb-16 text-gray-800'>Investment vs Revenue</h1>
                    <LineChart width={600} height={300} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="investment" />
                        <YAxis />
                    </LineChart>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-gray-800'>Investment vs Revenue</h1>
                    <PieChart width={600} height={400}>
                        <Pie data={charts} dataKey="investment" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
                        <Pie data={charts} dataKey="sell" cx="50%" cy="50%" innerRadius={110} outerRadius={150} fill="#82ca9d" label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-gray-800 mb-5'>Investment vs sell vs Revenue</h1>
                    <AreaChart
                        width={600}
                        height={400}
                        data={charts}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
                <div>
                <h1 className='text-3xl font-semibold text-gray-800 mb-5'>Investment vs sell</h1>
                    <LineChart
                        width={600}
                        height={400}
                        data={charts}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="sell" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;