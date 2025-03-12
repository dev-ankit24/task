import React, { useEffect, useRef, useState } from 'react'
import Slider from "../componets/partials/Slider"
import About from '../componets/About'
import Blog from '../componets/Blog'
import wha from '../assets/wh1.png'

import VideoSection from '../componets/VideoSection'
import MoreInformation from '../componets/MoreInformation'
import Events from '../componets/Events'

export default function Home() {

  // Function to open popup

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  // Click outside to close popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>


    <Slider/>
   <About/>
   <Blog/>
   <VideoSection/>
     <MoreInformation/>
    <Events/>
    <div className="relative">
        <button
          className="fixed bottom-50 h-15 right-6 bg-green-700 text-white px-4 py-2 rounded shadow-lg"
          onClick={() => setIsPopupOpen(true)}
        >
          Latest Events
        </button>

        {/* Popup Box */}
        {isPopupOpen && (
          <div
            ref={popupRef}
            className="fixed bottom-14 right-6 md:w-[26rem] w-[20rem]  h-[20rem] bg-orange-300 shadow-xl rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-lg font-bold text-center mb-2">आने वाला कार्यकर्म
            </h3>
            <table className="w-full border-collapse  ">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-sm">  प्रारंभ तिथि
              
                  </th>
                  <th className="border border-gray-300 px-2 py-1 text-sm">प्रारंभ तिथि
                  </th>
                  <th className="border border-gray-300 px-2 py-1 text-sm">वक्ता
                  </th>
                  <th className="border border-gray-300 px-2 py-1 text-sm">स्थान
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr className='hover:bg-amber-200'>
                  <td className="border border-gray-300 px-2 py-1 text-sm">2025-01-24</td>
                  <td className="border border-gray-300 px-2 py-1 text-sm">2025-01-25</td>
                  <td className="border border-gray-300 px-2 py-1 text-sm">स्वामी अभयानंद </td>
                     <td className="border border-gray-300 px-2 py-1 text-sm">दिल्ली</td>
                </tr>
                <tr className='hover:bg-amber-200'>
                  <td className="border border-gray-300 px-2 py-1 text-sm">2025-02-04</td>
                  <td className="border border-gray-300 px-2 py-1 text-sm">2025-02-05</td>
                  <td className="border border-gray-300 px-2 py-1 text-sm">श्री विभूषित महामण्डलेश्वर स्वामी  </td>
                     <td className="border border-gray-300 px-2 py-1 text-sm">
                     लखनऊ</td>
                </tr>
                <tr className='hover:bg-amber-200'>
                  <td className="border border-gray-300 px-2 py-1 text-sm">2025-03-14</td>
                  <td className="border border-gray-300 px-2 py-1 text-sm">2025-03-15</td>
                  <td className="border border-gray-300 px-2 py-1 text-sm">स्वामी अभयानंद </td>
                     <td className="border border-gray-300 px-2 py-1 text-sm">दिल्ली</td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <a
      href="https://wa.me/919789654212" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-15 right-6 text-white p-3 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
    >
      <img src={wha} alt="" srcset="" className='w-20 h-20 rounded-xs'   />
    </a>
    </>
  )
}
