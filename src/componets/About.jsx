import React from 'react'
import logo from "../assets/logo.png"
import ab1 from "../assets/ab1.png"
import ab2 from "../assets/ab2.png"
import ab3 from "../assets/ab3.png"
import ab4 from "../assets/ab4.png"

export default function About() {
  return (
  <>
  
  <div className="flex   md:px-[13rem]  h-[15rem]  md:mt-10 mt-[8rem] flex-col items-center justify-center  text-center px-4">
    {/* Logo */}
    <img
      src={logo} 
      alt="Logo"
      className="w-20 h-20 mb-4"
    />

    {/* Heading */}
    <h1 className="text-2xl md:text-4xl font-light text-gray-600 mb-2">
    परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
    </h1>

    {/* Subheading */}
    <h5 className="text-lg md:text-xl text-gray-600 mb-6">
    ‘आचार्यं मां विजानीयात्’ गुरु को मेरा रूप ही जानो अर्थात् गुरु और भगवान् में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास रखता है, गुरुदेव जिसपर प्रसन्न रहते हैं, उसे कोई विघ्न नहीं घेरते। गुरु माता-पिता-पति सब हैं, उनके बिना संसार में कहीं गति नहीं। गुरु सर्वशक्तिमान और वाँछाकल्पतरु हैं।
    </h5>

    {/* Button */}
    <button className="bg-white text-red-600 border-1 px-6 py-3 rounded-lg text-lg font-medium hover:text-white hover:bg-red-500 transition">
        KNOW MORE
    </button>
  </div>


{/* -------------------------------------------------------------------about your---------------------------------------- */}
  {/* about  your  */}
  <div className="flex   md:px-[13rem]  h-[15rem] mb-[-6rem]  md:mt-12 mt-[7rem] flex-col items-center justify-center  text-center px-4">
    {/* Logo */}
    <img
      src={logo} 
      alt="Logo"
      className="w-20 h-20 mb-4"
    />

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl  font-light text-gray-600 mb-2">
    हमारे बारे में
    </h1>
    </div>
  <div className="grid md:px-[13rem] mt-15 grid-cols-1 md:grid-cols-2 gap-6 p-6">
  
 
      {/* Child 1 */}
      <div className="flex flex-col items-center justify-centerp-6 rounded-lg ">
        <img
          src={ab1}
          alt="Logo"
          className="w-30 h-30 mb-3"
        />
        <h5 className="text-xl font-semibold  text-gray-600 mb-2">स्वामी अभयानंद संस्कृत विद्यालय </h5>
        <p className="text-gray-600 text-xl font-light  text-center">
        स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार हवन, स्वाध्याय, आदि ।
        </p>
      </div>

      {/* Child 2 */}
      <div className="flex flex-col items-center justify-center p-6 rounded-lg ">
        <img
          src={ab2}
          alt="Logo"
          className="w-30 h-30 mb-3"
        />
        <h5 className="text-xl font-semibold text-gray-600 mb-2">स्वामी अभयानंद गौशाला </h5>
        <p className="text-gray-600 text-xl font-light text-center">
        गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता
        </p>
      </div>

      {/* Child 3 */}
      <div className="flex flex-col items-center justify-center p-6 rounded-lg ">
        <img
          src={ab4}
          alt="Logo"
          className="w-30 h-30 mb-3"
        />
        <h5 className="text-xl font-semibold text-gray-600 mb-2">स्वामी अभयानंद पुस्तकालय​</h5>
        <p className="text-gray-600 text-xl font-light  text-center">
        स्वामी अभयानंद पुस्तकालय​ अंतर्गत, हमारे सदगुरुदेव भगवान के प्रवचनों का संकलन किया जाता है। अभी तक स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशीत करने की पंक्ति में 30 पुस्तकें प्रकाशित की जा चुकी हैं।
        </p>
      </div>

      {/* Child 4 */}
      <div className="flex flex-col items-center justify-center p-6 rounded-lg ">
        <img
          src={ab3}
          alt="Logo"
          className="w-30 h-30 mb-3"
        />
        <h5 className="text-xl font-semibold text-gray-600 mb-2">दैनिक सत्संग</h5>
        <p className="text-gray-600 text-xl font-light  text-center">
        इसका कार्य शुद्ध भक्ति जीवन की उन्नति के लिए अनुकूल एक शुद्ध और आध्यात्मिक रूप से सराबोर वातावरण उत्पन्न करना है। यहाँ प्रातः एवं सायं भगवत्नाम संकीर्तन एवं कथा वाचन किया जाता है ।
        </p>
      </div>
    </div>
  </>
  )
}
