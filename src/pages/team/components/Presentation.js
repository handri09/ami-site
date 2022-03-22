import React from "react"

function Presentation () {
  const [state, setState] = React.useState({
    content: [],
  })

  return (
    <div className="flex justify-center items-center border border-red-600 gap-3 h-96"> 
      <div onClick={() => console.log("prev")}>slide gauche</div>
      <div className="w-1/2 bg-green-100">image</div>
      <div onClick={() => console.log("next")}>slide droite</div>
    </div>
  );
}

export default Presentation;