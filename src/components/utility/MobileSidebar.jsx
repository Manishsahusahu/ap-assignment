import React, { useState } from "react";
import {
  AiFillApple,
  AiOutlineClose,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FaGooglePlay, FaPrayingHands } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import googlePlay from "../../assets/googlePlay.png";
import { BiLogoFacebook } from "react-icons/Bi";
import { BsWikipedia } from "react-icons/Bs";
import { FaThreads } from "react-icons/fa6";

const MobileSidebar = ({ setSidebarOn }) => {
  const [myAccount, setMyAccount] = useState(false);
  const [liveSessions, setLiveSessions] = useState(false);

  const handleClose = () => {
    setMyAccount(false);
    setLiveSessions(false);
    setSidebarOn(false);
  };

  return (
    <div
      className={`bg-red-600 h-[100vh] w-[100vw] fixed left-0 right-0 top-0 z-50 overflow-scroll`}
    >
      <div className={`h-[100vh] ${myAccount || liveSessions ? "hidden" : ""}`}>
        <div className=" pt-9 px-5 flex justify-between items-center">
          <div className="userDetails flex items-center space-x-2">
            <div className="text-red-600 left flex items-center justify-center bg-white  rounded-full w-[2.5rem] h-[2.5rem] text-xl">
              M
            </div>
            <div className="right flex flex-col justify-center font-semibold">
              <span className="text-lg">Manish Sahu</span>
              <span className="text-sm">sahumanish327@gmail.com</span>
            </div>
          </div>
          <div className="close text-2xl" onClick={handleClose}>
            <AiOutlineClose />
          </div>
        </div>
        <ul className="mt-9 flex flex-col space-y-4 text-2xl mx-5 pb-8 border-b-[1px]">
          <li
            className="flex justify-between items-center"
            onClick={() => setMyAccount(true)}
          >
            My Account <IoIosArrowForward className="text-lg" />
          </li>
          <li
            className="flex justify-between items-center"
            onClick={() => setLiveSessions(true)}
          >
            Live Sessions <IoIosArrowForward className="text-lg" />
          </li>
          <li>AP Books </li>
          <li>AP Articles </li>
          <li>Video Series </li>
          <li>AP Circle </li>
          <li>Invite For Talk </li>
          <li>Invite For an Interview </li>
          <li>Contact us </li>
          <li>
            <div className="button inline-flex items-center space-x-2 py-2 px-4 rounded-md text-lg bg-[#ffedd5] text-red-500">
              <FaPrayingHands />
              <span>Donate</span>
            </div>
          </li>
        </ul>
        <ul className="mt-9 flex flex-col space-y-4 text-xl mx-5 pb-8">
          <li>About Acharya Prashant </li>
          <li>PrashantAdvait Foundation </li>
          <li>In Media </li>
          <li>Logout</li>
        </ul>
        <ul className="flex items-center space-x-4 text-xl mx-5 pb-8 ">
          <li className="text-3xl md:text-xl">
            <FaGooglePlay />
          </li>
          <li className="text-3xl md:text-xl">
            <AiFillApple />
          </li>
        </ul>
        <div className="mt-2 flex flex-col space-y-4 text-xl mx-5 pb-8">
          <ul className="space-y-2">
            <li>For English</li>
            <li>
              <ul className="flex text-[2rem] space-x-3">
                <li>
                  <AiFillYoutube />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <BiLogoFacebook />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <BsWikipedia />
                </li>
              </ul>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>For Hindi</li>
            <li>
              <ul className="flex text-[2rem] space-x-3">
                <li>
                  <AiFillYoutube />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <FaThreads />
                </li>
                <li>
                  <BiLogoFacebook />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`myAccountSection  pt-9 px-5 ${
          liveSessions || !myAccount  ? "hidden" : ""
        }`}
      >
        <div className="close text-2xl  flex justify-between w-full">
          <AiOutlineArrowLeft onClick={() => setMyAccount(false)} />
          <AiOutlineClose onClick={handleClose} />
        </div>
        <ul className="mt-9 flex flex-col  space-y-4 text-2xl mx-2 pb-8">
          <li>My eBooks </li>
          <li>My Video Series </li>
          <li>Recorded Sessions</li>
          <li>My Cart</li>
          <li>My Donations </li>
          <li>My Orders</li>
          <li>Scholarship Requests</li>
        </ul>
      </div>
      <div
        className={`liveSessionsSection  pt-9 px-5 ${
          myAccount || !liveSessions   ? "hidden" : ""
        }`}
      >
        <div className="close text-2xl flex justify-between w-full">
          <AiOutlineArrowLeft onClick={() => setLiveSessions(false)} />
          <AiOutlineClose onClick={handleClose} />
        </div>

        <ul className="mt-9 flex flex-col space-y-6  text-2xl mx-2 pb-8">
          <li>Bhagawad Gita</li>
          <li>Sant Sarita</li>
          <li>Ashtavakra Samhita</li>
          <li>Bodh Pratyusha</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
