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
import logo from '../../assets/logo.png'

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
    <div className="flex items-center justify-center bg-blue-950">
      <div className=" w-[89%] md:w-[95%] flex text-white">
        <FooterList list={liveEvents} heading={"LIVE EVENTS"} />
        <FooterList list={wisdomContent} heading={"WISDOM CONTENT"} />
        <FooterList list={more} heading={"MORE"} />
        <div className="socialMedia">
          <p>SOCIAL MEDIA</p>
          <ul>
            <li>For English</li>
            <li>
              <ul className="flex">
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
            <li>For Hindi</li>
            <li>
              <ul className="flex">
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
        <div className="downloadApp">
          <ul>
            <li>
              <ul>
                <li>
                  <img src={logo} alt="" />
                </li>
                <li>Acharya Prashant</li>
              </ul>
            </li>
            <li><FaGooglePlay/></li>
            <li><AiFillApple/></li>
          </ul>
        </div>
        <div className="contactUs">
            <p>CONTACT US</p>
            <div className="mail flex">
                <AiOutlineMail/>
                <p>support@advait.org.in</p>
            </div>
            <div className="whatsapp flex">
                <BsWhatsapp/>
                <p>+91 9650585100</p>
            </div>
            <div className="phone flex">
                <BsFillTelephoneFill/>
                <p>+91 9650585100</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
