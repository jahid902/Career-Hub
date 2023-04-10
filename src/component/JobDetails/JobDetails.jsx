import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {

    const jobsData = useLoaderData()
    const [allJob, setAllJob] = useState({})
    const {id} = useParams()   

    useEffect(()=>{
        if(allJob){
            const data = jobsData.find(jobData=> jobData.id == id)
            setAllJob(data)
        }
    },[allJob])

    console.log(allJob);

    return (
        <div>
            <h1>{allJob.id}</h1>
            <h1>{allJob.salary}</h1>
        </div>
    );
};

export default JobDetails;