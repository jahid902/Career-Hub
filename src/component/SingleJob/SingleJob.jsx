import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const SingleJob = ({singleJob}) => {

    const {id,remote_onsite, fulltime_partime, salary, location, companyName, jobTitle, companyLogo} = singleJob;

    return (
        <div className='w-full border-2 border-slate-400 h-96 p-8 md:p-12 bg-slate-200  rounded-md flex flex-col items-start space-y-4 md:space-y-4'>
            <img className='w-1/3' src={companyLogo} alt="" />
            <h1 className='text-2xl font-bold tracking-wider'>{jobTitle}</h1>
            <h3 className='text-gray-700 text-lg font-semibold'>{companyName}</h3>
            <div className='flex space-x-4'>
                <button className='btn-common2'>{remote_onsite}</button>
                <button className="btn-common2">{fulltime_partime}</button>
            </div>
            <div className='flex flex-col md:flex-row space-x-2'>
                <div className='flex items-center'>
                <MapPinIcon className="h-6 w-6 text-cyan-400" />
                <p>{location}</p>
                </div>
                <div className='flex items-center'>
                <CurrencyDollarIcon className="h-6 w-6 text-cyan-400" />
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <Link to={`../job/${id}`}>
            <button className='btn-common2'>View Details</button>
            </Link>

        </div>
    );
};

export default SingleJob;