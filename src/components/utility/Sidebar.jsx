import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/Rx";

const Sidebar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);

  const handleClickAnywhere = (e) => {
    if (!e.target.closest('.sidebar') && sidebarOn) setSidebarOn(false);
    console.log(sidebarOn)
  };
  useEffect(() => {
    document.addEventListener("click", handleClickAnywhere);
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  });

  return (
    <div className="relative sidebar">
      <div
        onClick={() => setSidebarOn(true)}
        className="relative flex items-center justify-center space-x-2 z-10 "
      >
        <RxHamburgerMenu className="text-2xl " />{" "}
        <span className="hidden lg:block">
          Menu
        </span>
      </div>
      {/* <div className="overlay bg-black absolute h-[200vh] w-[100vw] opacity-50">
      </div> */}
      <div
        className={` overflow-x-hidden  absolute bg-black h-[100vh] w-[35vw] lg:w-[23vw]  z-30 -top-3 -right-[3rem]  lg:-right-[3rem]
        ${  sidebarOn ? '' : 'hideSidebar'
    } 
    transition-all duration-300`}
      >
        {/* <div className="userDetails">
          <div className="left rounded-full">M</div>
          <div className="right"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
