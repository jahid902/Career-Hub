import React from "react";
import { BriefcaseIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className="flex justify-between sm:px-2 md:px-6 sm:pt-2 md:pt-4
    bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 pb-2">
      <div className="flex items-center tracking-wider font-bold">
        <h1 className="text-3xl">
          Fit
          <span className="text-purple-600 text-3xl">my</span>
          <span className="text-purple-900 text-3xl">Job</span>
        </h1>
        <p> <BriefcaseIcon className="h-8 w-8 text-purple-500" /></p>
      </div>

      <ul className="flex space-x-4 text-lg items-center">
        <li>Home</li>
        <li>Statistics</li>
        <li>Applied jobs</li>
        <li>Blogs</li>
      </ul>

      <div>
        <button className="px-4 py-3 text-white bg-purple-700 rounded-lg hover:bg-purple-600">Start Applying</button>
      </div>
    </div>
  );
};

export default Navbar;
