import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/LOGO_.png"

const styling = "hover:border-green-500 hover:text-green-500 border-white border-2 rounded-md p-3 px-5"
const opened = "border-green-500 text-green-500 border-white border-2 rounded-md p-3 px-5"

function NavBar() {
  return (
    <div className={`w-full top-0 flex antialiased justify-end sticky z-10 text-xl font-mono shadow-md`}>

      <div className="flex w-1/2 px-10 h-20"><img className={``} src={logo} alt={`ami`}/></div>
      
      <div className="flex w-1/2 gap-16 items-center justify-center">
        <Link to="/ami-site/" className={styling}>Home</Link>
        <Link to="/ami-site/activities" className={styling}>Activities</Link>
        <Link to="/ami-site/team" className={styling}>Team</Link>
        <Link to="/ami-site/contact" className={styling}>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;