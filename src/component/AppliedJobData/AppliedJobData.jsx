import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobData = ({singleJob}) => {

        const {id,remote_onsite, fulltime_partime, salary, location, companyName, jobTitle, companyLogo}= singleJob;

        console.log(singleJob);

    return (
        <div className='p-3 md:p-4 rounded-md bg-purple-50 flex justify-between w-full md:w-2/3 h-18 md:h-36 mx-auto  my-4 border-2 border-cyan-500'>
            <div className='flex '>
                <img className='flex justify-center my-auto bg-slate-200 object-fill w-28 md:w-48 h-20 md:h-24 mr-4' src={companyLogo} alt="" />
            <div className=''>
            <h1 className='text-base md:text-lg font-bold tracking-wider'>{jobTitle}</h1>
            <h3 className='text-gray-700 text-lg font-medium'>{companyName}</h3>
            <div className='flex space-x-4'>
                <button className='btn-common3'>{remote_onsite}</button>
                <button className="btn-common3">{fulltime_partime}</button>
            </div>
            <div className='flex flex-col md:flex-row space-x-2 justify-start items-start'>
                <div className='flex items-center'>
                <MapPinIcon className="h-6 w-6 text-cyan-400" />
                <p>{location}</p>
                </div>
                <div className='flex items-center'>
                <CurrencyDollarIcon className="h-6 w-6 text-cyan-400" />
                    <p>Salary: {salary}</p>
                </div>
            </div>
            </div>
            </div>
            <div className='flex my-auto'>
            <Link to={`../job/${id}`}>
            <button className='btn-common3'>View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default AppliedJobData;