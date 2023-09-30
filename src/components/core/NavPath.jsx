import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const NavPath = () => {
  return (
    <div className="hidden md:flex justify-center items-center">
      <div className="w-[95%] flex items-center space-x-2 text-gray-800 text-sm h-[3rem] font-medium">
          <div className="home text-gray-500">Home</div>
          <IoIosArrowForward />
          <div>संतवाणी</div>
      </div>
    </div>
  );
};

export default NavPath;
