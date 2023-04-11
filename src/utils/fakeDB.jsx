// add job application to database (local storage)

const addToDb = id => {

    let applications ={};

    const storedApplications = localStorage.getItem('job-applications');
    if(storedApplications){
        applications = JSON.parse(storedApplications);
    }

    let quantity = applications[id]
    if(quantity){
        let newQuantity = quantity + 1;
        applications[id] = newQuantity;
    }
    else{
        applications[id] = 1
    }

    localStorage.setItem('job-applications', JSON.stringify(applications))
}

const getStoredApplications = () => {

    let applications ={};

    const storedApplications = localStorage.getItem('job-applications');
    if(storedApplications){
        applications = JSON.parse(storedApplications);
    }
    return applications;

}

export {addToDb, getStoredApplications}