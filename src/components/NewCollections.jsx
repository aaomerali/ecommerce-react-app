import React from 'react'
import Item from './Item'


function NewCollections() {
  return (
    <div className='w-full flex justify-center py-20'>

        <div className="container  px-8  p-5 text-center relative">

            <h1 className='text-4xl md:text-[40px] font-medium'>NEW COLLECTIONS</h1>
            <h1 className='text-3xl mb-[20px] md:mb-[30px] md:text-4xl font-bold relative '>ــــــــــــــــــــ</h1>

            <div className='flex items-center justify-center flex-wrap gap-8 mb-10 '>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            
        </div>
        
    </div>
  )
}

export default NewCollections