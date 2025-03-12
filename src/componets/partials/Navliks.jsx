import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navlinks() {
  return (
<>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/">Home</NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/error">About Us </NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/error">Blog </NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/error">Gallery</NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/error">E-Books</NavLink>
 <NavLink className="text-gray-600 md:text-gray-600 hover:text-orange-500 md:hover:text-orange-500 font-semibold" to="/error">Contact Us</NavLink>
</>
  )
}
