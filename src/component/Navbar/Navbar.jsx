import React from "react";
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="flex items-center tracking-wider font-bold">
        <h1 className="text-3xl">
          Fit
          <span className="text-purple-600 text-3xl">my</span>
          <span className="text-purple-900 text-3xl">Job</span>
        </h1>
        <p> <BriefcaseIcon className="h-8 w-8 text-purple-500" /></p>
      </div>

      <ul className="flex space-x-4 text-lg items-center">
        <li><NavLink to="/" className={({isActive})=> isActive? 'active':'default'}>Home</NavLink></li>
        <li><NavLink to="/statistics" className={({isActive})=> isActive? 'active':'default'}>Statistics</NavLink></li>
        <li><NavLink to="/applications" className={({isActive})=> isActive? 'active':'default'}>Applied jobs</NavLink></li>
        <li><NavLink to="/blogs" className={({isActive})=> isActive? 'active':'default'}>Blogs</NavLink></li>
      </ul>

      <div>
        <button className="btn-common">Start Applying</button>
      </div>
    </div>
  );
};

export default Navbar;
