import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const OpenInApp = () => {
  return (
    <div className="lg:hidden fixed bottom-0 right-0 left-0 flex justify-center items-center bg-[#ffedd5]">
      <div className="w-[89%] flex justify-between items-center py-3">
        <div className="text-[1.1rem]">Open in App</div>
        <div className="flex items-center gap-1 bg-[#ea580c] text-white py-2 px-5 text-xs rounded-3xl">
          <MdOutlineDownloadForOffline className="text-base" />
          Download App
        </div>
      </div>
    </div>
  );
};

export default OpenInApp;
