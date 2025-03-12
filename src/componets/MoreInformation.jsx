import React, { useEffect, useState } from "react";
import sc1 from "../assets/sc1.jpg"
import sc2 from "../assets/sc2.jpg"
import sc4 from "../assets/sc4.jpg"
import sc3 from "../assets/sc3.png"

const images1 = [
  sc1,sc2, sc3
];

const images2 = [
    sc4,sc2, sc3
];

export default function MoreInformation() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  // Auto-scroll images
  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));
    }, 3000);

    const interval2 = setInterval(() => {
      setIndex2((prev) => (prev === images2.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-6">
      {/* Card 1 */}
      <div className="w-full md:w-1/2 shadow-lg rounded-lg overflow-hidden p-6 text-center">
        <img
          src={images1[index1]}
          alt="Auto-scroll 1"
          className="w-full h-64 object-cover rounded-md transition-all duration-500"
        />
        <h1 className="text-3xl font-semibold text-gray-600 mt-4">स्वामी अभयानंद गौशाला समिति</h1>
        <h5 className="text-lg text-gray-600 mt-7">गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।.</h5>
        <button className="bg-white text-red-600 mt-3 border-1 px-6 py-3 rounded-lg text-lg font-medium hover:text-white hover:bg-red-500 transition">
         और पढ़ें
        </button>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/2 shadow-lg rounded-lg overflow-hidden p-6 text-center">
        <img
          src={images2[index2]}
          alt="Auto-scroll 2"
          className="w-full h-64 object-cover rounded-md transition-all duration-500"
        />
        <h1 className="text-3xl font-semibold text-gray-600 mt-4">स्वामी अभयानंद संस्कृत विद्यालय</h1>
        <h5 className="text-lg  text-gray-600 mt-7">स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार।</h5>
        <button className="bg-white text-red-600 mt-3 border-1 px-6 py-3 rounded-lg text-lg font-medium hover:text-white hover:bg-red-500 transition">
         और पढ़ें
        </button>
      </div>
    </div>
  );
}


