import React from 'react';

const JobCategoryData = ({data}) => {
    console.log(data);
    return (
        <div className='w-60 h-44 rounded-md space-y-4 p-4 bg bg-gradient-to-r from-violet-300 to-fuchsia-300 text-start hover:-translate-y-3 duration-500'>
            <img className='w-12 h-12 rounded-md' src={data.picture} alt="" />
            <h1 className='text-lg font-medium'>{data.title}</h1>
            <p className='text-sm font-thin text-gray-700'>{data.vacancy}</p>
        </div>
    );
};

export default JobCategoryData;