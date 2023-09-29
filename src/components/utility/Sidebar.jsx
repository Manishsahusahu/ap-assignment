import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/Rx";

const Sidebar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);

  const handleClickAnywhere = (e) => {
    if (!e.target.closest(".sidebar") && sidebarOn) setSidebarOn(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickAnywhere);
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  });

  return (
    <>
      <div
        className={`overlay cursor-auto bg- h-[400vh] w-[400vw] bg-[rgba(0,0,0,0.5)] -left-[100rem] -top-3 fixed
        ${sidebarOn ? "opacity-100 z-20" : "opacity-0 z-0"} 
        transition-all duration-700 `}
      ></div>
      <div className="relative sidebar">
        <div
          onClick={() => setSidebarOn(true)}
          className="relative flex items-center justify-center space-x-2 z-10 "
        >
          <RxHamburgerMenu className="text-2xl " />{" "}
          <span className="hidden lg:block">Menu</span>
        </div>

        <div
          className={`absolute overflow-y-scroll bg-white text-black w-[35vw] lg:w-[28vw]  z-30 -top-3 -right-[3rem]  lg:-right-[3rem]
        ${sidebarOn ? "" : "hideSidebar"} 
    transition-all duration-700`}
        >
          <div className=" pt-9 pl-6 pr-10">
            <div className="userDetails flex space-x-2 border-b-2  pb-5">
              <div className="text-white left flex items-center justify-center bg-green-600  rounded-full w-[2.5rem] h-[2.5rem] text-xl">
                M
              </div>
              <div className="right flex flex-col justify-center">
                <span className="text-base">Manish Sahu</span>
                <span className="text-xs">sahumanish327@gmail.com</span>
              </div>
            </div>
            <ul className="flex flex-col space-y-2 mt-3 text-sm font-normal  border-b-2  pb-5">
              <li>Bhagawad Gita </li>
              <li>Sant Sarita </li>
              <li>Ashtavakra Samhita </li>
              <li>Bodh Pratyusha </li>
              <li>AP Books </li>
              <li>AP Articles </li>
              <li>Video Series </li>
              <li>AP Circle </li>
              <li>Invite For Talk </li>
              <li>Invite For an Interview </li>
              <li>Media and Public Interaction </li>
              <li>Contact Us </li>
              <li>Donate</li>
            </ul>
            <ul className="flex flex-col space-y-2 mt-3 text-sm font-normal  border-b-2  pb-5">
              <li>My Video Series </li>
              <li>My eBooks </li>
              <li>Recorded Sessions </li>
              <li>My Cart </li>
              <li>My Donations </li>
              <li>My Orders </li>
              <li>Scholarship Requests</li>
            </ul>
            <div className="flex flex-col space-y-2 border-b-2  pb-5 mt-3">
              <span className="font-semibold">MORE</span>
              <ul className="flex flex-col space-y-2  text-sm font-normal ">
                <li>My Video Series </li>
                <li>My eBooks </li>
                <li>Recorded Sessions </li>
                <li>My Cart </li>
                <li>My Donations </li>
                <li>My Orders </li>
                <li>Scholarship Requests</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2 pb-5 mt-3">
              <span className="font-semibold">EXPLORE CATEGORIES</span>
              <ul className="flex flex-col space-y-2  text-sm font-normal ">
                <li>Vedant - Upanishads </li>
                <li>Vedant - Bhagavad Gita </li>
                <li>Other Scriptures </li>
                <li>Saints and Masters </li>
                <li>Other streams </li>
                <li>Life Questions </li>
                <li>Technical Support</li>
              </ul>
            </div>
          </div>
          <div className="button bg-gray-100 flex items-center justify-center py-2 text-red-500">
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
