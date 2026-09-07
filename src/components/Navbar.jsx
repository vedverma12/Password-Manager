import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white' >
      <div className="mycontainer flex justify-around gap-10 items-center px-4 py-8 h-11">
        
        <div className='logo font-bold text-white text-2xl'>
          <span className="text-green-500">&lt;</span>
         
          Pass
          <span className="text-green-500">OP/&gt;</span>
          
          </div>
        <a href='https://github.com/vedverma12/Password-Manager' target='_blank' className='text-white  bg-green-700 p-1  w-15 rounded-full flex gap-3 jusitfy-center items-center ring-white ring-1'>
          <img className='invert w-8' src="github.svg" alt="" />
          <span className='font-bold'>GitHub</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar