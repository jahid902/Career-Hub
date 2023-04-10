import React from "react";

const Applications = () => {
  return (
    <div>
      <div className="relative bg-slate-50 h-48 mb-4">
        <h1 className="py-6 my-auto text-center text-3xl font-semibold text-fuchsia-800 mb-4">
          Job Details
        </h1>
        <img
          className="w-28 h-48 md:w-1/3 absolute inset-y-0 left-0 "
          src="https://img.freepik.com/free-vector/blue-line-gradient-background_361591-1373.jpg?size=626&ext=jpg&uid=R98934714&ga=GA1.2.1789606317.1681061526&semt=sph"
          alt=""
        />
        <img
          className="w-28 h-48 md:w-1/3 absolute inset-y-0 right-0 "
          src="https://img.freepik.com/free-vector/blue-line-gradient-background_361591-1373.jpg?size=626&ext=jpg&uid=R98934714&ga=GA1.2.1789606317.1681061526&semt=sph"
          alt=""
        />
      </div>
    </div>
  );
};

export default Applications;
