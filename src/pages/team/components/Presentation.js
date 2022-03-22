import React, { useEffect } from "react"
import gp1 from "../../../assets/teams/gp1.JPG"
import gp2 from "../../../assets/teams/gp2.jpg"
import slidel from "../../../assets/slide_left.png"
import slider from "../../../assets/slide_right.png"

const images = {
  1: gp1,
  2: gp2,
}

function Presentation () {
  const [count, setCount] = React.useState(1);
  const onPrev = () => {
    setCount(count => count-1)
  }
  const onNext = () => {
    setCount(count => count+1)
  }
  return (
    <div className="flex justify-center items-center gap-3 shadow-md my-10"> 
      <div><button onClick={onPrev} disabled={count===1 ? true : false }><img src={slidel} /></button></div>
      <div className="flex flex-col w-1/2 bg-green-100">
        <img src={images[count]} />
      </div>
      <div><button onClick={onNext} disabled={count===2 ? true : false }><img src={slider} /></button></div>
    </div>
  );
}

export default Presentation;