import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[8%] bg-zinc-600 flex justify-between p-4 items-center">
      <h1 className="text-2xl playwrite font-bold">Logo</h1>
      <div className="text-xl flex gap-5 font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
