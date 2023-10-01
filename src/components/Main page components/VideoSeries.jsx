import React from "react";
import { BsFillBookmarkFill } from "react-icons/Bs";

const VideoSeries = ({ courses }) => {
  const timeToHoursAndMinutes = function (time) {
    let minutes = time*60;
    console.log(minutes)
    let hours=Math.floor(minutes/60);
    minutes%=60;
    return hours + " hours " + Math.round(minutes) + " minutes";
  };

  return (
    <div className="flex items-center justify-center mt-14">
      <div className="w-[89%] md:w-[95%] flex flex-col">
        <div className="heading border-b-2 w-[100%] pb-3">
          <h2 className="text-[1.4rem]">
            Video Series {`(${courses.length})`}
          </h2>
        </div>
        <div className="courses flex flex-wrap justify-between xl:justify-normal">
          {courses.map((course, index) => (
            <div
              className="course flex flex-col w-[100%] md:w-[45%] xl:w-[30%] border-b-2 xl:mr-10 md:p-5 py-5 pr-5 hover:bg-slate-100 rounded-lg mb-5"
              key={index}
            >
              <div className=" bhaagNum inline-flex items-center">
                <BsFillBookmarkFill
                  size={45}
                  className="-rotate-90 text-gray-400"
                />
                <p className="absolute text-xs ml-1 text-white z-10">
                  भाग {index + 1}
                </p>
              </div>
              <div className="content">
                <p className="font-medium text-lg">{course.title}</p>
                <p className="text-gray-700 mb-2">{course.subtitle}</p>
                <p className="text-gray-700 text-sm">
                  {timeToHoursAndMinutes(course.courseHours)}
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  Contribution: ₹{course.amount}{" "}
                  <span className="line-through text-sm">
                    ₹{course.originalAmount}
                  </span>
                </p>
                <div className="language border-2 rounded-lg bg-blue-100 inline py-[1px] px-1 text-sm">
                  {course.language.slice(0, 1).toUpperCase() +
                    course.language.slice(1)}
                </div>
                <p className="text-green-600 text-xs mt-3">View Video Series</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSeries;
