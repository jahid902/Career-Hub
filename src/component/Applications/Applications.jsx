import React, { useEffect, useState } from "react";
import { getStoredApplications } from "../../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import AppliedJobData from "../AppliedJobData/AppliedJobData";

const Applications = () => {
  const [job, setJob] = useState([]);
  const jobsData = useLoaderData();

  useEffect(()=>{
    const applications = getStoredApplications()
    let arr = [];
    for(const id in applications){
      const findJob = jobsData.find(jobData => jobData.id === id)
      if(findJob){
        arr.push(findJob)
      }
    }
      setJob(arr);
  }, [])
  

  return (
    <div>
      {/* banner style */}
      <div className="relative bg-slate-50 h-48 mb-4">
        <h1 className="py-6 my-auto text-center text-3xl font-semibold text-fuchsia-800 mb-4">
          Applied Jobs 
        </h1>
        <img
          className="w-28 h-48 md:w-1/3 absolute inset-y-0 left-0 "
          src="/All Images/Vector-1.png"
          alt=""
        />
        <img
          className="w-28 h-48 md:w-1/3 absolute inset-y-0 right-0 "
          src="/All Images/Vector.png"
          alt=""
        />
      </div>
      {/* banner style */}
      {/* applied job data show section */}
     <div className="my-4 md:my-12">
     {
        job.map(singleJob => <AppliedJobData key={singleJob.id}
        singleJob={singleJob}
        ></AppliedJobData>)
      }
     </div>

    </div>
  );
};

export default Applications;
