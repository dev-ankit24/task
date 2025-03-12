import React, { useEffect, useState } from 'react'
import sli from "../../assets/sli1.jpg"
import sli1 from "../../assets/sli2.jpg"
import sli2 from "../../assets/sli3.jpg"
import sli3 from "../../assets/sli4.jpg"

export default function Slider() {
  const images = [
    sli,sli1,sli2,sli3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Current image index
  const [autoScroll, setAutoScroll] = useState(true); // Auto-scroll toggle

  // Auto-scroll function
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
      }, 3000); // Auto-scroll every 3 seconds (3000 ms)
      
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [autoScroll, images.length]);

  // Manual next button click
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  // Manual previous button click
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="w-full mt-7 h-screen flex flex-col md:flex-row">
      {/* Slider Section (Desktop Only) */}
      <div className="md:w-1/1 p-5 w-full flex flex-col justify-center items-center bg-white hidden md:flex">
        <div className="w-full  flex justify-center items-center  ">
          <div className="w-full p-5 relative">
            <img 
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-[40rem] object-cover"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer" onClick={handlePrev}>
              &#10094; {/* Previous arrow */}
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer" onClick={handleNext}>
              &#10095; {/* Next arrow */}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/3 p-2 w-full h-[38rem] bg-cover object-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url('${sli1}')`,
        }}
      ></div>
    </div>
  );
};
