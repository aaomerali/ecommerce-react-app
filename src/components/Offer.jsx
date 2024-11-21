import React from 'react'

function Offer() {
  return (
    <div className=' w-full text-white flex justify-center mb-20'>
        <div className="container bg-gradient-to-tr from-indigo-600 to-purple-500 flex flex-col justify-center items-center text-center bg w-[70%] max-w-[2000px] p-10 py-20 rounded-xl">
            <h1 className='text-4xl md:text-5xl  font-medium mb-4'>Exclisive Offers For You</h1>
            <p className='text-md md:text-2xl mb-8'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='text-lg font-normal text-indigo-800 bg-white p-2 px-8 rounded-full transition-all hover:scale-110 '>Check Now</button>
        </div>
    </div>
  )
}

export default Offer