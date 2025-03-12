import React from 'react';
import bgImage from '../assets/blg.jpeg';
 import bgImage1 from '../assets/blg1.png';
  import bgImage2 from '../assets/blg2.png'; 
  import bgImage3 from '../assets/blg3.png'; 
  import bgImage4 from '../assets/blg4.png'; 
  import bgImage5 from '../assets/blg5.png'; 
  import logo from "../assets/logo.png"

export default function Blog() {
  return (
   <>
   
   <div className="flex   md:px-[13rem]  h-[10rem]  md:mt-10 mt-[0.5rem] flex-col items-center justify-center  text-center px-4">
      {/* Logo */}
      <img
        src={logo} 
        alt="Logo"
        className="w-20 h-20 mb-4"
      />
  
      {/* Heading */}
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-600 mb-2">
      Latest From Our Blog
      </h1>
  
      {/* Button */}
    
    </div>



    <div className="w-full h-screen p-5 flex flex-col md:flex-row">
       
      {/* First Child: Image */}
      <div 
        className="w-full md:w-1/2  md:h-[30rem] h-[150px] object-contain bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }} 
      ></div>

      {/* Second Child: Logo + H2 */}
      <div className="w-full md:w-1/2  items-center justify-center">
        <div className="flex items-center space-x-4 p-5">
          <img src={bgImage1} alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">गौशाला</h2>
        </div>
        <div className="flex items-center space-x-4 p-5">
          <img src={bgImage2} alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">संस्कृत विद्यालय​</h2>
        </div>
        <div className="flex items-center space-x-4 p-5">
          <img src={bgImage3} alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">संस्कृत विद्यालय</h2>
        </div>
        <div className="flex items-center space-x-4 p-5">
          <img src={bgImage4} alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">सत्संग</h2>
        </div>
        <div className="flex items-center space-x-4 p-5">
          <img src={bgImage5} alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">भगवत आरती</h2>
        </div>
      </div>
      
    </div>

    <div className="flex   md:px-[13rem]  h-[5rem]  md:mt-[-14rem] mt-[0rem] flex-col items-center justify-center  text-center px-4">
      
    
        {/* Button */}
        <button className="bg-white text-red-600 border-1 px-6 py-3 rounded-lg text-lg font-medium hover:text-white hover:bg-red-500 transition">
           READ ALL
        </button>
      </div>
   </>
  );
}
