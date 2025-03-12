import React from 'react'
import logo from "../assets/logo.png"
export default function VideoSection() {
  return (
    <>
      <div className="flex   md:px-[13rem] mt-[-3rem] h-[15rem]  md:mt-5  flex-col items-center justify-center  text-center px-4">
        {/* Logo */}
        <img
          src={logo} 
          alt="Logo"
          className="w-20 h-20 mb-4"
        />
    
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-light text-gray-600 mb-2">
        वीडियो देखें
        </h1>
      </div>
    
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center p-6 gap-6">
      {/* First Child: YouTube Video */}
      <div className="w-full mt-[-4rem] md:w-1/2">
        <div className="relative w-full h-64 md:h-96">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/m8P8d5qIkyQ?si=6AHcF01demd5Uy4k"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Second Child: Text Content */}
      <div className="w-full md:w-1/2  pl-5 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-600">श्रीमद्भगवत गीता अध्याय-9 | भग-7 </h1>
        <p className="mt-4  text-lg text-gray-600">
        श्रीमद्भगवद्गीता अध्याय- 9 (राजविद्याराजगुह्ययोग), भाग -7, अनंत श्री विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री पंचायती अखाड़ा महानिर्वाणी) ” अध्यक्ष ” अखिल भारतीय संत समिति उत्तर प्रदेश स्वामी अभयानन्द वेद पाठशाला ,पपनामऊ,अनौरा कलां ,फैज़ाबाद रोड़ ,(लखनऊ )

First slide
स्वामी अभयानंद गौशाला समिति
गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।

First slide
स्वामी अभयानंद संस्कृत विद्यालय
स्वामी अभ्यानंद वेद  व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार।


        </p>
      </div>
    </div>
    <div className="flex   md:px-[13rem]  h-[5rem]  md:mt-[1rem] mt-[0rem] flex-col items-center justify-center  text-center px-4">
      
    
      {/* Button */}
      <button className="bg-white text-red-600 border-1 px-6 py-3 rounded-lg text-lg font-medium hover:text-white hover:bg-red-500 transition">
         
 सभी वीडियो देखें
      </button>
    </div>
    </>
  )
}
