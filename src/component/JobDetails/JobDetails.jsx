import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { addToDb } from "../../utils/fakeDB";

const JobDetails = () => {
  const jobsData = useLoaderData();
  const [allJob, setAllJob] = useState({});
  const { id } = useParams();
  const [apply, setApply] = useState(false)

  const handleAlert = (id) =>{

    Swal.fire(
      "Task complete",
      "Applied for the job",
      'success'
    )
    setApply(true)
    addToDb(id);
  }


  useEffect(() => {
    if (jobsData) {
      const data = jobsData.find((jobData) => jobData.id == id);
      setAllJob(data);
    }
  }, [allJob]);


  return (
    <div className="w-11/12 bg-slate-100 mx-auto font-serif p-5 md:p-10">
      <div className="relative bg-slate-50 h-48 mb-4">
      <h1 className="py-6 my-auto text-center text-3xl font-semibold text-fuchsia-800 mb-4">
        Job Details
      </h1>
      <img className="w-20 h-48 md:w-72 absolute inset-y-0 left-0 " src="https://img.freepik.com/free-vector/blue-line-gradient-background_361591-1373.jpg?size=626&ext=jpg&uid=R98934714&ga=GA1.2.1789606317.1681061526&semt=sph" alt="" />
      <img className="w-20 h-48 md:w-72 absolute inset-y-0 right-0 " src="https://img.freepik.com/free-vector/blue-line-gradient-background_361591-1373.jpg?size=626&ext=jpg&uid=R98934714&ga=GA1.2.1789606317.1681061526&semt=sph" alt="" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="space-y-4 md:space-y-8 w-full">
          <p>
            <strong>Job description:</strong> {allJob.jobDescription}
          </p>
          <p>
            <strong>Job responsibility:</strong> {allJob.jobResponsibility}
          </p>
          <p>
            <strong>Educational Requirement:</strong>
            <br /> {allJob.educationalRequirements}
          </p>
          <p>
            <strong>Experience:</strong>
            <br /> {allJob.experiences}
          </p>
        </div>

        <div className="bg-gray-300 rounded-lg p-2 md:p-4 flex flex-col items-start w-full md:w-2/5 space-y-4">
          <h1 className="text-xl font-semibold">Job Details</h1> <hr  className="w-full"/>

          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-6 w-6 text-cyan-400" />
            <p>Salary: {allJob.salary}(per month)</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-6 w-6 text-cyan-400" />
            <p>Job Title: {allJob.jobTitle}</p>
          </div>
          <h1 className="text-xl font-semibold">Contact Information</h1> <hr  className="w-full"/>

          <div className="flex items-center gap-2">
            <PhoneIcon className="h-6 w-6 text-cyan-400" />
            <p>Phone: {allJob.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-6 w-6 text-cyan-400" />
            <p>Email: {allJob.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6 text-cyan-400" />
            <p>Address: {allJob.location}</p>
          </div>
          {!apply &&
            <button onClick={()=> handleAlert(allJob.id)} className="btn-common2 mx-auto">Apply now </button>
          }
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
