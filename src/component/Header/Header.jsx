import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryData from "../JobCategoryData/JobCategoryData";

const Header = () => {
  const categoryData = useLoaderData();

  return (
    <div className="p-6">
      <section className="flex flex-col-reverse md:grid grid-cols-2 gap-3 md:p-10">
        <div className="font-serif space-y-6  md:order-first md:p-6">
          <h1 className="font-bold text-4xl">
            One step
            <br />
            Closer to your <br />
            <span className="text-purple-800">Dream job.</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need.
            <span className="font-semibold text-purple-700">
              {" "}
              It's your future
            </span>
            . Come find it. Manage all your job application from start to
            finish. This site will help you pursue your desired job and help you
            to reach your full potential.
          </p>
          <button className="btn-common">Get started</button>
        </div>
        <div className=" md:order-last">
          <img
            className="w-full h-48 md:h-64 lg:h-96  rounded-lg object-contain"
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.1789606317.1681061526&semt=sph"
            alt=""
          />
        </div>
      </section>
      {/* header section banner code complete*/}
      <section className="font-serif my-4">
        <h1 className="text-3xl font-bold text-center">Job Category List</h1>
        <p className="my-2 text-center font-light">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="flex flex-col items-center md:flex-row gap-3 my-8 px-2 md:px-14 justify-between">
        {categoryData.map((data) => (
          <JobCategoryData data={data} key={data.id}></JobCategoryData>
        ))}
        </div>
      </section>

      
    </div>
  );
};

export default Header;
