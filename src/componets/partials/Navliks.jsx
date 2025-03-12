import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navlinks() {
  return (
<>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/">Home</NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/about">About Us </NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/blog">Blog </NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/ga/lery">Gallery</NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/books">E-Books</NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/contact">Contact Us</NavLink>
</>
  )
}
