import React from "react";
import  ev1 from "../assets/ev1.png"
import  ev2 from "../assets/ev2.png"
import  ev3 from "../assets/ev3.png"

export default function Events() {
  return (
   <>
    <div className="w-full mt-48  md:mt-[-5rem] h-[20rem] flex flex-col md:flex-row items-center justify-center gap-6 p-6">
      
      {/* Child 1 */}
      <div className="w-full md:w-1/3 bg-orange-400 shadow-lg hover:bg-orange-300  p-6 text-center flex flex-col items-center">
        <img
          src={ev1}
          alt="Logo 1"
          className="w-16 h-16"
        />
        <h1 className="text-2xl text-white font-semibold mt-4">About</h1>
        <h5 className="text-lg text-white mt-2">About Swami Abhyanand Ji</h5>
      </div>

      {/* Child 2 */}
      <div className="w-full md:w-1/3 bg-red-900 hover:bg-red-800  shadow-lg  p-6 text-center flex flex-col items-center">
        <img
          src={ev2}
          alt="Logo 2"
          className="w-16 h-16"
        />
        <h1 className="text-2xl text-white font-semibold mt-4">Events</h1>
        <h5 className="text-lg text-white mt-2">Swami Abhyanand Ji Events</h5>
      </div>

      {/* Child 3 */}
      <div className="w-full md:w-1/3 bg-orange-500 hover:bg-orange-400 shadow-lg  p-6 text-center flex flex-col items-center">
        <img
          src={ev3}
          alt="Logo 3"
          className="w-16 h-16"
        />
        <h1 className="text-2xl text-white font-semibold mt-4">Blog</h1>
        <h5 className="text-lg text-white mt-2">Swami Abhyanand Ji Blog</h5>
      </div>

    </div>
   </>
  );
}
