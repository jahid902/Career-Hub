import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const marks = [
    {
      id : 1,  
      name: "Assignment-1",
      full_mark: 60,
      achieved: 57,
    },
    {
      id : 2,  
      name: "Assignment-2",
      full_mark: 60,
      achieved: 59,
    },
    {
      id : 3,  
      name: "Assignment-3",
      full_mark: 60,
      achieved: 59,
    },
    {
      id : 4,  
      name: "Assignment-4",
      full_mark: 60,
      achieved: 60,
    },
    {
      id : 5,  
      name: "Assignment-5",
      full_mark: 60,
      achieved: 60,
    },
    {
      id : 6,  
      name: "Assignment-6",
      full_mark: 60,
      achieved: 58,
    },
    {
      id : 7,  
      name: "Assignment-7",
      full_mark: 60,
      achieved: 60,
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
        <BarChart
          width={1000}
          height={400}
          data={marks}        
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="full_mark" fill="#8884d8" />
        <Bar dataKey="achieved" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
        </div>;
};

export default Statistics;
