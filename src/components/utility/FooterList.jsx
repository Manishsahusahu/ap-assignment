import React from "react";

const FooterList = ({ list, heading }) => {
  return (
    <div className="liveEvents">
      <p>{heading}</p>
      <ul>
        {list.length > 0 &&
          list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default FooterList;

