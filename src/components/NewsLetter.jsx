import React from 'react'

function NewsLetter() {
  return (
    <div className=' w-full text-white flex justify-center mb-20'>
        <div className="container bg-gradient-to-tr from-indigo-600 to-purple-500 flex flex-col justify-center items-center text-center bg w-[70%] max-w-[2000px] p-10 py-20 rounded-xl">
            <h1 className='text-3xl md:text-5xl  font-medium mb-4'>Get Exclusive Offers on your Email</h1>
            <p className='text-md md:text-xl mb-8'>Subscribe o our newsletter and stay updated</p>
            <input type="email" placeholder='Ex: example@gmail.com' className='w-[70%] max-w-[550px] h-12 text-slate-800 text-center p-5 mb-4 rounded-full shadow-lg' />
            <button className='text-lg font-normal text-indigo-800 bg-white p-2 px-8 rounded-full transition-all hover:scale-110 '>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter