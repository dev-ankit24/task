import React from "react";
import logo from "../assets/logo.png"
import sc4 from "../assets/sc4.jpg"
import { Phone } from "lucide-react";
import  fa from "../assets/fa.svg"
import  li from "../assets/li.svg"
import  ph from "../assets/ph.svg"
import  tw from "../assets/tw.svg"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-orange-500  md:mt-[-1rem] h-[18.5rem] md:h-[24.5rem] mt-[12rem] text-white ">
      {/* 1st Parent Div */}
      <div className="container mx-auto px-6 md:flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="w-full text-center mb-6">
          <img src={logo} alt="Logo" className="mx-auto mb-2" />
          <h4 className="text-xl font-bold">आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी</h4>
          <h5 className="text-md">॥श्री गुरूवे नमः॥ (परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द सरस्वती जी महराज) कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च तेन। अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥ (स्कंन्दपुराणम्)</h5>
        </div>

        {/* Contact Sections */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-1">
          {/* Contact Cards */}
          {[
            { location: "Lucknow Ashram", number: "+91-9965678080" },
            { location: "Meerut Ashram", number: "+91-9965678080" },
            { location: "Sitapur Ashram", number: "+91-9965678080" },
            { location: "Haridwar Ashram", number: "+91-9965678080" },
           ].map((item, index) => (
            <div key={index} className="bg-amber-100 mt-5 border-amber-600 border-2 text-black p-4 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">{item.location}</h3>
              <div className="flex items-center justify-center mt-2">
                <Phone className="text-orange-600 pl-[-3rem]" />
                <span>{item.number}</span>
              </div>
              
              <div className="flex">
              <div className="mt-3">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Click Here</button>
              </div>
              <img src={sc4} alt="Ashram" className="mx-auto h-12 w-20 mt-2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd Parent Div */}
      <div className="bg-orange-400 px-[2.5rem]  mt-6 py-4 flex flex-col md:flex-row items-center justify-between ">
        {/* Copyright Section */}
        <p className="text-center text-xl">
          ©2025 परम पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री अभ्यानंद सरस्वती जी | ALL RIGHTS RESERVED
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="https://www.facebook.com/people"><img src={fa} alt="" srcset="" /></Link>
            <Link to="https://x.com/?lang=en"> <img src={tw} alt="" srcset="" /></Link> 
            <Link to="#">      <img src={ph} alt="" srcset="" /></Link>
            <Link to="https://www.linkedin.com/" >  <img src={li} alt="" srcset="" /> </Link>
        </div>
      </div>
    </footer>
  );
}
