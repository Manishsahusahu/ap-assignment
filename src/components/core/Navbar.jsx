import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { BsTelephone } from "react-icons/Bs";
import ToggleIcon from "../utility/ToggleIcon";
import Sidebar from "../utility/Sidebar";

const Navbar = () => {
  const langArray = ["हिंदी", "English"];
  const sessionsArray = [
    "Bhagavad Gita",
    "Sant Sarita",
    "Ashtavakra Samhita",
    "Bodh Pratyusha",
  ];
  const inviteArray = ["For a talk", "For a interview"];

  return (
    <>
      <div className="flex bg-red-600 h-11 w-full items-center justify-center">
        <div className="relative nav flex items-center justify-between text-white w-[89%] md:w-[95%]  text-sm font-medium ">
          <div className="flex justify-between space-x-4">
            <img className="w-[31px]" src={logo} alt="logo" />
            <ul className="hidden menu md:flex items-center justify-center cursor-pointer space-x-4 z-10">
              <li>Home</li>
              <li>
                <ToggleIcon value={"Live Sessions"} list={sessionsArray} />
              </li>
              <li>Video Series </li>
              <li>AP Books</li>
              <li>AP Articles </li>
              <li>
                <ToggleIcon value={"Invite"} list={inviteArray} />
              </li>
              <li className="hidden lg:block">In Media </li>
              <li>Donate</li>
            </ul>
          </div>
          <ul className="relative menu space-x-5 flex items-center justify-center cursor-pointer ">
            <li className="md:hidden border-2 py-[0.13rem] px-1 rounded-md z-10">
              Donate
            </li>
            <li className="z-10">
              <ToggleIcon
                list={langArray}
                value={
                  <span className="border-2 py-[0.13rem] px-1 rounded-md">
                    EN
                  </span>
                }
              />
            </li>
            <li className="hidden lg:block  z-10">
              <BsTelephone className="text-xl" />{" "}
            </li>
            <li className="relative">
              <Sidebar />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
