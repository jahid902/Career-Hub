import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const marks = [
    {
      id : 1,  
      name: "Assignment-1",
      full_mark: 60,
      achieved: 10,
    },
    {
      id : 2,  
      name: "Assignment-2",
      full_mark: 60,
      achieved: 55,
    },
    {
      id : 3,  
      name: "Assignment-3",
      full_mark: 60,
      achieved: 25,
    },
    {
      id : 4,  
      name: "Assignment-4",
      full_mark: 60,
      achieved: 10,
    },
    {
      id : 5,  
      name: "Assignment-5",
      full_mark: 60,
      achieved: 20,
    },
    {
      id : 6,  
      name: "Assignment-6",
      full_mark: 60,
      achieved: 38,
    },
    {
      id : 7,  
      name: "Assignment-7",
      full_mark: 60,
      achieved: 40,
    },   
    {
      id : 8,  
      name: "Assignment-8",
      full_mark: 60,
      achieved: 54,
    }   
  ];

  return <div className="bg-slate-200 py-3 text-fuchsia-700 ">
        <h1 className="py-10 text-3xl font-bold text-center tracking-wide">Assignment Marks Statistics</h1>
        <ResponsiveContainer width="95%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={marks}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="achieved" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
        </div>;
};

export default Statistics;
