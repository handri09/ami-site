import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/LOGO_.png"
import { Outlet } from "react-router-dom";

const styling = "hover:border-green-500 hover:text-green-500 border-white border-2 rounded-md p-3 px-5 font-bold "
const opened = "border-green-500 text-green-500 border-white border-2 rounded-md p-3 px-5"

function NavBar() {
  return (
    <>
      <div className={`w-full top-0 flex flex-col md:flex-row antialiased justify-end sticky text-xl lg:text-2xl font-mono shadow-md bg-white z-10`}>
        <Link to="/ami-site/" className="flex pl-5 md:pl-10 w-full md:w-1/3 xl:w-1/2 h-20"><img className={`h-20`} src={logo} alt={`ami`}/></Link>
        <div className="flex flex-col md:flex-row w-full md:w-2/3 xl:w-1/2 gap-2 md:gap-3 lg:gap-5 xl:gap-10 items-center justify-center">
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