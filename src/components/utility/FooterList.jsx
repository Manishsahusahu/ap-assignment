import React from "react";

const FooterList = ({ list, heading }) => {
  return (
    <div className="liveEvents mb-5">
      <p className="font-semibold mb-3">{heading}</p>
      <ul className="text-base text-[#CBD5E1]">
        {list.length > 0 &&
          list.map((item, index) => <li className="mb-3" key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default FooterList;

