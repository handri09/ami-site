import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
  return (
   <div className="antialiased flex sticky w-full top-0 z-20 h-20 shadow-md justify-end">
     <div className="flex gap-10 items-center justify-end mx-5">
       <Link to="/ami-site/" className="hover:text-green-500 hover:bg-green-100 p-3">Home</Link>
       <Link to="/ami-site/activities" className="hover:text-green-500 hover:bg-green-100 p-3">Activities</Link>
       <Link to="/ami-site/team" className="hover:text-green-500 hover:bg-green-100 p-3">Team</Link>
       <Link to="/ami-site/contact" className="hover:text-green-500 hover:bg-green-100 p-3">Contact</Link>
     </div>
   </div>
  );
}

export default NavBar;