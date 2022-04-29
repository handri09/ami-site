import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/LOGO_.png"
import { Outlet } from "react-router-dom";

const styling = "hover:border-green-500 hover:text-green-500 border-white border-2 rounded-md p-3 px-5 font-bold "
const opened = "border-green-500 text-green-500 border-white border-2 rounded-md p-3 px-5"

function NavBar() {
  return (
    <>
      <div className={`w-full top-0 flex antialiased justify-end sticky text-xl lg:text-2xl font-mono shadow-md bg-white z-10`}>
        <div className="flex pl-10 w-1/2 h-20 border-2 border-green-500"><img className={``} src={logo} alt={`ami`}/></div>
        <div className="flex w-1/2 gap-10 items-center justify-center border-2 border-blue-500">
          <Link to="/ami-site/" className={styling}>Home</Link>
          <Link to="/ami-site/activities" className={styling}>Activities</Link>
          <Link to="/ami-site/team" className={styling}>Team</Link>
          <Link to="/ami-site/contact" className={styling}>Contact</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;