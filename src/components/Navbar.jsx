import React from 'react'
import logoIcon from '../Assests/logoIcon.png'
import { AiOutlineShoppingCart } from "react-icons/ai";


function Navbar() {

    const MenuItems = [
        {
            title : "Shop",
            path : "./#"
        },

        {
            title : "Men",
            path : "./#"
        },

        {
            title : "Women",
            path : "./#"
        },

        {
            title : "Kids",
            path : "./#"
        },
    ]

  return (
    <div className='border-b-2 w-full flex justify-center'>
        <div className='container flex items-center justify-around  p-5 '>

            <div className='logo flex items-center gap-3'>
                <img className="icon w-[50px]" src={logoIcon} /> 
                <h1 className='text-3xl font-bold text-slate-700'>SHOPPER</h1>
            </div>

            <ul className='flex items-center gap-8'>
                {
                    MenuItems.map(item => (
                        <li className='text-[20px] cursor-pointer'>{item.title}</li>
                    ))
                }
            </ul>

            <div className='flex items-center gap-9'>
                <button className='text-[18px] border border-slate-600 py-[5px] px-10 rounded-full '>Login</button>
                <AiOutlineShoppingCart size={35} />
            </div>

        </div>
    </div>
    
  )
}

export default Navbar