import React, { useEffect, useRef, useState } from 'react'
import logo from  "../assets/logo.png"
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'
import Navlinks from './partials/Navliks'
export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false)

    const toggle= ()=>{
     setIsOpen(!isOpen)
     }
  
  return (
    <>  
        <div className='bg-orange-600 px-[2.5rem] h-8 flex flex-wrap justify-between md:px-[13rem]'>
            <span>
                <Link target='_blank' className='text-white font-semibold items-center align-middle hover:text-gray-300' to="mailto:abc@gmail.com">abc@gmail.com</Link>
            </span>
            <span>
                <Link target='_blank' className='text-white font-semibold items-center align-middle hover:text-gray-300' to="tel:+91987456130">+91 9874563201</Link>
            </span>
        </div>
        <header className='bg-black-500 flex-wrap sticky md:px-[15rem] top-0 z-[20] mx-auto flex w-full items-center justify-between border-gray-500 px-8 br '>
            <div className="logo  h-15 w-18 mt-5">
                <NavLink to={'/'}>
                <img src={logo }className='w-16 h-14' alt="" srcset="" />
                </NavLink>
            </div>
                <nav className='flex w-1/2 justify-end'>
                <div className="md:flex hidden justify-between w-full  ">
                    <Navlinks/>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggle }>
                        {isOpen?<X/> :<Menu/>}
                    </button>
                </div>
                </nav>
                {
                    isOpen&& (
                        <div className='flex flex-col items-center basis-full'>
                            <Navlinks/>
                        </div>
                    )
                }

        </header>

   </>
    
  )
}
