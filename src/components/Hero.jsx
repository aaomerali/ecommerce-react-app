import React from 'react'
import heroPhoto from '../Assests/heroPhoto.png'

function Hero() {
    return (

        <div className='w-full  bg-gradient-to-tr from-indigo-600 to-purple-500 p-0.5 flex items-start justify-center pt-[65px] md:pt-10 overflow-hidden '>
            <div className="container  flex flex-col md:flex-row items-center justify-between px-8 md:px-20 h-[800px] md:max-h-[500px]  xl:max-h-[700px] ">
                <div className="left text-white flex flex-col md:items-start w-[100%] ">
                    <p className='text-xl lg:text-3xl mb-3'>NEW ARRIVALS ONLY</p>
                    <h1 className='text-[50px] lg:text-[75px] font-bold leading-[60px] lg:leading-[80px]	mb-10'>new <br/> collections <br/> for everyone </h1>
                    <button className='text-lg font-normal text-indigo-800 bg-white p-2 px-8 rounded-full transition-all hover:scale-110 mb-10'>Latest Collectin</button>
                </div>

                <div className="right relative bg-indigo-50 w-full flex justify-center rounded-t-full mt-5 ">
                    <img src={heroPhoto} alt="heroPhoto" className='w-[70%]' />
                </div>
            </div>
        </div>
        
    );
}

export default Hero