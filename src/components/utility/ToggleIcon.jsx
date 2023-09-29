import React, { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/Bi";

const ToggleIcon = ({ list, value }) => {
  const [btnOn, setBtnOn] = useState(false);
  const [close, setClose] = useState(false);

  const handleclick = () => {
    setClose(false);
    setBtnOn(!btnOn);
  };

  const handleClickAnywhere = (e) => {
    if (close) setBtnOn(false);
    setClose(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAnywhere);
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  });

  return (
    <div
      onClick={handleclick}
      className="flex items-center justify-center space-x-1 "
    >
      <span>{value}</span>
      <span
        className={`text-xs transition-all duration-300 ${
          btnOn ? "rotate-180" : ""
        }`}
      >
        <BiSolidDownArrow />
      </span>
      {list.length > 0 && (
        <ul
          className={`bg-white border-b-2 shadow-sm shadow-black rounded-lg text-black absolute top-12 py-3 px-6 text-md font-medium flex flex-col space-y-2  transition-all duration-300 ${
            btnOn ? "opacity-[1]" : "opacity-[0] hidden"
          }`}
        >
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleIcon;
