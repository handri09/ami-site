import React from "react"
import faniry from "../../../assets/faniry.jpeg"

function Team ({team}) {
  const {id, name, role, story, url} = team;

  return (
    <div className="flex border border-red-600 w-full my-5">
      <div className="flex items-center w-1/2 bg-green-100 h-full">
        <img src={faniry} />
      </div>
      <div className="w-1/2">
        <p className="text-gray-500 text-xl font-weight">{name}</p>
        <p>{role}</p>
        <p>{story}</p>
      </div>
    </div>
  );
}

export default Team;