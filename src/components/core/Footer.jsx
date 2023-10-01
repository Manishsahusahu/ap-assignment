import React from "react";
import FooterList from "../utility/FooterList";
import {
  AiFillApple,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/Bi";
import { BsFillTelephoneFill, BsWhatsapp, BsWikipedia } from "react-icons/Bs";
import { FaGooglePlay, FaThreads } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  const liveEvents = [
    "Bhagavad Gita",
    "Sant Sarita",
    "Ashtavakra Samhita",
    "Bodh Pratyusha",
  ];
  const wisdomContent = [
    "Video Series",
    "AP Books",
    "AP Articles",
    "AP Circle",
  ];
  const more = [
    "About Acharya Prashant",
    "Invite Him",
    "Interview Him",
    "Ghar Ghar Upanishad",
    "Media and Public Interaction",
  ];
  return (
    <div className="flex items-center justify-center bg-[#0F172A]">
      <div className=" w-[89%] md:w-[95%] md:h-[20rem] flex flex-col md:flex-row text-white justify-between pt-10">
        <FooterList list={liveEvents} heading={"LIVE EVENTS"} />
        <FooterList list={wisdomContent} heading={"WISDOM CONTENT"} />
        <FooterList list={more} heading={"MORE"} />
        <div className="socialMedia mb-9">
          <p className="font-semibold mb-3">SOCIAL MEDIA</p>
          <div className="space-y-6 text-base text-[#CBD5E1] ">
              <ul className="space-y-2">
                <li>For English</li>
                <li>
                  <ul className="flex text-[1.3rem] space-x-1">
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
                  <ul className="flex text-[1.3rem] space-x-1">
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
        <div className="downloadApp mb-9 md:ml-3">
          <p className="font-semibold mb-3 hidden md:block">DOWNLOAD APP</p>
          <p className="font-semibold mb-3 md:hidden block">DOWNLOAD ACHARYA PRASHANT APP</p>
          <ul className="text-base text-[#CBD5E1] space-y-3">
            <li className="hidden md:block">
              <ul className="flex space-x-2 items-center">
                <li>
                  <img width="27" src={logo} alt="" />
                </li>
                <li>Acharya Prashant</li>
              </ul>
            </li>
            <div className="flex items-center space-x-4">
                <li className="text-3xl md:text-xl">
                  <FaGooglePlay />
                </li>
                <li className="text-3xl md:text-xl">
                  <AiFillApple />
                </li>
            </div>
          </ul>
        </div>
        <div className="contactUs mb-9">
          <p className="font-semibold mb-3">CONTACT US</p>
          <div className="space-y-3">
              <div className="mail flex items-center space-x-3 text-base text-[#CBD5E1]">
                <AiOutlineMail className="text-xl" />
                <p>support@advait.org.in</p>
              </div>
              <div className="whatsapp flex items-center space-x-3 text-base text-[#CBD5E1]">
                <BsWhatsapp className="text-xl" />
                <p>+91 9650585100</p>
              </div>
              <div className="phone flex items-center space-x-3 text-base text-[#CBD5E1]">
                <BsFillTelephoneFill className="text-xl" />
                <p>+91 9650585100</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
