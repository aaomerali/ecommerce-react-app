import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../Assests/logoIcon.png'



function Footer() {

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
    <div className=' w-full flex justify-center'>
        <div className="container flex flex-col justify-center items-center gap-7 w-[70%] max-w-[2000px] p-5 ">
            <Link to='/'>
                <div className='logo flex items-center gap-3 cursor-pointer'>
                    <img className="icon md:w-[50px] w-[40px]" src={logoIcon} /> 
                    <h1 className='text-2xl md:text-3xl font-bold text-slate-700'>SHOPPER</h1>
                </div>
            </Link>

            <ul className=' items-center gap-8 hidden md:flex'>
                {
                    MenuItems.map(item => (
                        <li 
                            className={'text-[20px] cursor-pointer border-none pd-1'}
                            
                            onClick={() => handelMenu(item)}

                        >{item.title}</li>
                    ))
                }
            </ul>

            <hr className='text-slate-800 w-[100%]' />

            <p>Copyright @ 2024 - All Right Reserved</p>

        </div>
    </div>
  )
}

export default Footer