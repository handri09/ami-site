import React from 'react'
import {AspectRatio} from '@chakra-ui/react'

function Presentation() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full py-24 -mt-20">
        <div className="w-full h-full">
          <h1 className="m-5 font-bold text:text-2xl lg:text-4xl font-mono text-green-600">Mr. Léonce, AMI's president.</h1>
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
      <div className="h-screen w-full bg-red-100">
        
      </div>
    </>
  )
}

export default Presentation