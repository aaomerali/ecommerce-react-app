import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../Assests/logoIcon.png'
import { AiOutlineShoppingCart } from "react-icons/ai";



function Navbar() {

    const navigate = useNavigate();

    const [category , setCategory] = useState("Shop")

    const MenuItems = [
        {
            title : "Shop",
            path : "/"
        },

        {
            title : "Men",
            path : "/men"
        },

        {
            title : "Women",
            path : "/women"
        },

        {
            title : "Kids",
            path : "/kids"
        },
    ]


    const handelMenu = (item) => {
        setCategory(item.title)
        navigate(item.path)
    }

  return (
    <div className='border-b-2 w-full flex justify-center'>
        <div className='container flex items-center justify-around  p-5'>

            <div className='logo flex items-center gap-3 cursor-pointer'>
                <img className="icon w-[50px]" src={logoIcon} /> 
                <h1 className='text-3xl font-bold text-slate-700'>SHOPPER</h1>
            </div>

            <ul className='flex items-center gap-8'>
                {
                    MenuItems.map(item => (
                        <li 
                            className={`text-[20px] cursor-pointer ${
                                item.title === category ? 'border-b-4 border-violet-800 pb-2 transition-all' 
                                                        : 'border-none pd-1'
                            }`}
                            
                            onClick={() => handelMenu(item)}

                        >{item.title}</li>
                    ))
                }
            </ul>

            <div className='flex items-center gap-9'>
                <Link to="/login">
                    <button className='text-[18px] border border-slate-600 py-[5px] px-10 rounded-full hover:bg-violet-800 hover:text-white transition-all'>Login</button>
                </Link>

                <Link to='/cart'>
                    <div className='relative cursor-pointer'>
                        <AiOutlineShoppingCart size={35} />
                        <p className='absolute top-0 right-0 bg-red-700 text-white px-1 pb-2 rounded-full h-[18px] text-sm'>0</p>
                    </div>
                </Link>
            </div>

        </div>
    </div>
    
  )
}

export default Navbar