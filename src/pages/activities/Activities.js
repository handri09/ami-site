import React from 'react'
import {Page} from "./components"
import logo from '../../assets/logo.png'

function Activities() {
  return (
    <>
      {/* <Page /> */}
      <div className={`w-full flex gap-2 text-2xl text-gray-700`}>

          <div className={`w-1/4 h-full pb-5 flex flex-col gap-3 bg-green-50`}>
            <h1 className={`flex justify-center items-center p-2 font-bold`}>Contact</h1>
            <div className='flex flex-col px-5 gap-3'>
              <p>Phone: 034 27 536 51</p>
              <p>Address: Ambohitsilaozana</p>
            </div>
          </div>

          <div className={`w-2/4 flex flex-col gap-3 h-screen bg-red-50 text-2xl p-2`}>
            <h1 className={`text-center p-3 font-bold text-gray-600`}>Actualities</h1>
            { 
              ['One', 'Two', 'Three', 'Four', 'Five'].map( actu => (
                <div
                  key={actu}
                  className={`w-full bg-white flex gap-3 border-2 hover:border-gray-300 border-white`}>
                  <div className={`w-1/4`}><img src={logo} alt='logo' className='' /></div>
                  <div className=''>Help {actu}</div>
                </div>
              ))}
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
    </>
  )
}

export default Activities