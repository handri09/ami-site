import React from "react"
import faniry from "../../../assets/teams/faniry.jpeg"
import haja from "../../../assets/teams/haja.png"
import elie from "../../../assets/teams/elie.jpg"
import leonce from "../../../assets/teams/leonce.jpg"

const images = {
  faniry: faniry, 
  haja: haja,
  elie: elie,
  leonce: leonce,
}

function Team ({team}) {
  const {id, name, role, story, url} = team;
  console.log(images["faniry"])
  return (
    <div className="flex w-full my-5 shadow-md">
      <div className="flex items-center w-1/2 h-full">
        <img src={images[url]} alt=""/>
      </div>
      <div className="w-1/2">
        <p className="text-gray-500 text-2xl font-weight border border-b-gray-500 p-2 m-1">{name}</p>
        <p className="text-gray-600 italic m-2">{role}</p>
        <p className="text-justify p-3">{story}</p>
      </div>
    </div>
  );
}

export default Team;