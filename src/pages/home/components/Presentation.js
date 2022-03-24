import React from 'react'
import {AspectRatio} from '@chakra-ui/react'
import logo from "../../../assets/LOGO_.png"

function Presentation() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
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
      
      <div className="flex md:flex-row justify-center items-center h-screen w-full mt-10 flex-col">
        <div className="flex w-4/5 md:w-1/3 justify-center items-center"><img src={logo} /></div>
        <div className="flex flex-col justify-center items-center w-4/5 md:w-1/2">
          <h1 className='text-3xl border-b-2 border-b-gray-600 px-20 py-2'>Léonce, president of AMI</h1>
          <p className="w-full md:w-2/3 text-xl py-3 text-justify">
            AMI is an association of young people living at Ambohitsilaozana in Madagascar.
            The association aim to help the kids in needs whether in terms of scholarship or schools equipments. 
            One of the reason why AMI is created is, many children stoped school due to familly issue, sometimes lack motivation or not enough many to pursue the school.
            Then AMI was created to help those kids with what we have.
          </p>
          <p className="w-full md:w-2/3 text-xl py-3 text-justify">If you may help, below is the IBAN</p>
          <p className="w-full md:w-2/3 text-xl py-3 text-justify">         
            IBAN: <code>MG 46 00005 0001 3729 5063 0001 80</code> <br />
            Domiciliation: AMBATONDRAZAKA BNI <br />
            Titulaire: ASSOCIATION AMI - ANKIZY MIVOATRA NO IFANDROMBONANA <br />
            <span className='flex justify-center font-mono text-gray-600'>***BIC CLMDMGMG***</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Presentation