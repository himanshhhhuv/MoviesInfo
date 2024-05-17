import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className=" flex space-x-8 bg-slate-100 rounded-sm mx-auto container justify-center  p-8 text-2xl">
        <li className="cursor-pointer">
          <NavLink to="/"> Home</NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/about"> About</NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/blog"> Blog</NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/github"> Github</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
