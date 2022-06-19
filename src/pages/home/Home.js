import React from 'react';
import { Presentation, Footer } from '../../components';
import {AspectRatio} from '@chakra-ui/react';
import logo from '../../assets/logoAmi.png';

function Home() {
  return (
    <>
      <div className={`
        w-full h-full flex
        gap-2
        text-2xl text-gray-700
        `}>
          <div className={`w-1/4 h-full pb-5 flex flex-col gap-3 bg-green-50 p-3`}>
            <div className=''><img src={logo} alt='ami' className='w-full' /></div>
            <div className='flex flex-col px-5 gap-3'>
            </div>
          </div>

          <div className={`w-2/4 flex flex-col gap-3 h-full bg-red-50 text-xl`}>
            <h1 className={`text-center p-3 font-bold`}>Mr. Léonce, AMI's president.</h1>
            <AspectRatio ratio={1} className={`flex w-full border border-white`} style={{ maxHeight:"50vh" }}>
              <iframe
                title='Léonce'
                src='https://www.youtube.com/embed/QMyEdgGEfIg'
                allowFullScreen
              />
            </AspectRatio>
            <div className={`w-full flex flex-col text-justify py-5 px-10 gap-3`}>
              <p className="">
                AMI is an association of people living at Ambohitsilaozana in Madagascar.
                The association aim to help the kids in needs whether in terms of scholarship or schools equipments. 
                One of the reason why AMI is created is, many children drop out due to familly issue, sometimes lack motivation or not enough many to pursue the school.
                Then AMI was created to help those kids with what we have.
              </p>
              <p className="">If you may help, below is the IBAN</p>
              <p className="">         
                <code className='text-gray-800'>IBAN: MG 46 00005 0001 3729 5063 0001 80<br />
                Domiciliation: AMBATONDRAZAKA BNI <br />
                Titulaire: ASSOCIATION AMI - ANKIZY MIVOATRA NO IFANDROMBONANA <br /></code> 
                <span className='flex justify-center font-mono text-gray-800 py-5'>***BIC CLMDMGMG***</span>
              </p>
            </div>
          </div>

          <div className={`w-1/4 flex flex-col gap-1 p-2 h-full pb-5 bg-gray-300 text-xl`}>
            <h1 className={`flex justify-center items-center p-2 text-2xl font-bold`}>Actuality</h1>
            {
              ['One', 'Two', 'Three', 'Four'].map(actu => (
                <div key={actu} className={`hover:transform hover:border-gray-400 border-2 hover:bg-gray-50 w-full h-24 bg-gray-100 flex items-center justify-center`}>News {actu}</div>    
              ))
            }
          </div>
      </div>
      {/* <Presentation /> */}
      <Footer />
    </>
  );
}

export default Home;