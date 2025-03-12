import React, { useEffect, useState } from "react";
import sli from "../../assets/sli1.jpg";
import sli1 from "../../assets/sli2.jpg";
import sli2 from "../../assets/sli3.jpg";
import sli3 from "../../assets/sli4.jpg";

export default function Slider() {
  const images = [sli, sli1, sli2, sli3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoScroll, images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mt-7 h-screen flex flex-col md:flex-row">
      {/* Slider Section (Desktop Only) */}
      <div className="md:w-2/3 w-full flex flex-col justify-center items-center hidden md:flex">
        <div className="w-full flex justify-center items-center">
          <div className="w-full p-5 relative">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-[40rem] object-cover"
            />
            <div
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer"
              onClick={handlePrev}
            >
              &#10094;
            </div>
            <div
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full cursor-pointer"
              onClick={handleNext}
            >
              &#10095;
            </div>
          </div>
        </div>
      </div>

      {/* Image Section (Mobile: Full Width, Desktop: 1/3 Width) */}
      <div
        className="w-full md:w-1/3 mt-11 h-[40rem] bg-cover bg-center"
        style={{
          backgroundImage: `url('${sli3}')`,
        }}
      ></div>
    </div>
  );
}
