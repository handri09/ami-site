import React from 'react'
import {AspectRatio} from '@chakra-ui/react'
import logo from "../../../assets/LOGO_.png"

function Presentation() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full py-24 md:py-20 lg:py-24 -mt-20">
        <div className="w-full h-full">
          <h1 className="m-5 md:m-2 lg:m-5 font-bold text-xl md:text-2xl lg:text-2xl font-mono text-green-600">Mr. Léonce, AMI's president.</h1>
          <AspectRatio ratio={1}>
            <iframe
              title='Léonce'
              src='https://www.youtube.com/embed/QMyEdgGEfIg'
              style={{ height:"80vh" }}
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex w-1/2 justify-center items-center"><img src={logo} /></div>
        <div className="flex justify-center items-center w-1/2">
          <p className="w-2/3">
            AMI is an association of young people living at Ambohitsilaozana in Madagascar.
            The association aim to help the kids in needs whether in terms of scholarship or schools equipments. 
            One of the reason why AMI is created is, many children stoped school due to familly issue, sometimes lack motivation or not enough many to pursue the school.
            Then AMI was created to help those kids with what we have.
          </p>
        </div>

      </div>
    </>
  )
}

export default Presentation