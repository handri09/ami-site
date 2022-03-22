import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
  return (
   <div className="antialiased flex sticky bg-white w-full top-0 z-20 h-20 shadow-md justify-end">
     <div className="flex gap-10 items-center justify-end mx-5 font-mono text-xl">
       <Link to="/ami-site/" className="hover:text-green-500 hover:bg-green-100 p-3 px-5">Home</Link>
       <Link to="/ami-site/activities" className="hover:text-green-500 hover:bg-green-100 p-3 px-5">Activities</Link>
       <Link to="/ami-site/team" className="text-green-500 border border-green-500 rounded-md p-3 px-5">Team</Link>
       <Link to="/ami-site/contact" className="hover:text-green-500 hover:bg-green-100 p-3 px-5">Contact</Link>
     </div>
   </div>
  );
}

export default NavBar;