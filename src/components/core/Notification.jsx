import React from "react";

const Notification = () => {
  return (
    <div className="flex items-center justify-between lg:justify-center lg:space-x-5  bg-gray-800 text-white min-h-[3.5rem] text-sm lg:text-lg  px-5">
      <div className="flex items-center justify-center space-x-2 ">
        <div className="rounded-full h-4 w-4 border-[1px] bg-red-500"></div>
        <p>Get access to all 350+ video series at once!</p>
      </div>
      <div className="flex justify-center items-center border-[1px] text-sm font-normal rounded-lg w-[6.5rem] py-[0.4rem]">Click Here</div>
    </div>
  );
};

export default Notification;
