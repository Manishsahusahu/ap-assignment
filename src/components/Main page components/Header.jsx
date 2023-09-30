import React, { useEffect } from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoWhatsapp } from "react-icons/Bi";

const Header = ({ courseDetails }) => {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="w-[89%] md:w-[95%] flex flex-col ">
        <div className="heading flex items-center font-medium text-lg lg:text-2xl md:text-xl h-[4rem]">
          संतवाणी
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="image flex md:w-[40%]">
            <img
              className="w-[100%] md:w-[100%] rounded-md"
              src={`${courseDetails.thumbnail.domain}/${courseDetails.thumbnail.basePath}/10/image.jpg`}
              alt=""
            />
          </div>
          <div className="paragraph md:w-[60%] space-y-3">
            <h3 className="font-medium text-xl">संतों की सीख पर आधारित श्रृंखला</h3>
            <p className="text-base text-gray-600">
              जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को
              पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता
              प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस श्रृंखला में
              आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई,
              मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए
              उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान
              वीडियो कोर्स में।
            </p>
          </div>
        </div>
        <div className="socialMedia mt-3 hidden md:block">
          <p className=" text-gray-600 text-base">Share this series:</p>
          <div className="links flex text-4xl space-x-6">
            <BiLogoFacebook className="text-cyan-700"/>
            <BiLogoTwitter className="text-purple-500"/>
            <BiLogoWhatsapp className="text-red-500"/>
            <BiLogoLinkedin className="text-blue-700"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
