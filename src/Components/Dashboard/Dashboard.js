import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Dashbord = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('dashboardData.json')
            .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h2>MONTH WISE SELL</h2>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />

                    </LineChart>
                </div>
                <div className="col-md-6">
                    <h2>Investment VS Revenue</h2>
                </div>
            </div> 
        </div>
    );
};


export default Dashbord;