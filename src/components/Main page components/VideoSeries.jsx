import React from "react";

const VideoSeries = ({ courses }) => {
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="w-[89%] md:w-[95%] flex ">
        <div className=" border-b-2 w-[100%] pb-3">
          <h2 className="text-[1.4rem]">
            Video Series {`(${courses.length})`}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoSeries;
