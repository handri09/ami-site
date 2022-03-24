import React from 'react'
import {AspectRatio} from '@chakra-ui/react'

function Presentation() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-green-200 py-24 -mt-20">
        <div className="w-full h-full p-5">
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