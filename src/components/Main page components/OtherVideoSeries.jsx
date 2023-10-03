import React from "react";

const OtherVideoSeries = ({ courses }) => {
  const timeToHoursAndMinutes = function (time) {
    let minutes = time * 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    return hours + " hours " + Math.round(minutes) + " minutes";
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-[89%] md:w-[95%] flex flex-col">
        <div className="heading border-b-[1px] w-[100%] pb-3">
          <h2 className="text-[1.1rem] font-medium">
            Other Helpful Video Series
          </h2>
        </div>
        <div className="courses flex flex-wrap justify-between flex-col md:flex-row">
          {courses.map((course, index) => {
            if (course.contentType === "CourseSeries")
              return (
                <div
                  key={index}
                  className="course flex w-[100%] md:w-[47%] py-5 hover:bg-slate-100 space-x-4 border-b-[1px] mb-4"
                >
                  <div className="leftPart w-[35%]">
                    <img
                      className="rounded-md w-full object-contain"
                      src={`${course.thumbnail.domain}/${course.thumbnail.basePath}/${course.thumbnail.qualities[0]}/${course.thumbnail.key}`}
                      alt=""
                    />
                  </div>
                  <div className="rightPart w-[50%] ">
                    <p className="text-[1.2rem] font-medium">{course.title}</p>
                    <p className="text-[0.9rem] text-[#475569]">
                      {course.subtitle}
                    </p>
                    <p className="text-[0.9rem] text-[#475569]">{`${course.coursesCount} Video Series`}</p>
                  </div>
                </div>
              );
            else if (course.contentType === "Course")
              return (
                <div
                  key={index}
                  className="course flex w-[100%] md:w-[47%] py-5 hover:bg-slate-100 space-x-4 border-b-[1px]"
                >
                  <div className="leftPart w-[35%]">
                    <img
                      className="rounded-md w-full object-contain"
                      src={`${course.thumbnail.domain}/${course.thumbnail.basePath}/${course.thumbnail.qualities[0]}/${course.thumbnail.key}`}
                      alt=""
                    />
                  </div>
                  <div className="rightPart w-[50%] ">
                    <p className="text-[1.2rem] font-medium">{course.title}</p>
                    <p className="text-[0.9rem] text-[#475569] mb-2">{course.subtitle}</p>
                    <p className="text-gray-700 text-xs mb-1">
                      {timeToHoursAndMinutes(course.courseHours)}
                    </p>
                    <p className="text-gray-700 text-xs mb-2">
                      Contribution: ₹{course.amount}
                    </p>
                    <div className="language border-2 rounded-md bg-blue-100 inline py-[1px] px-1 text-xs">
                      {course.language.slice(0, 1).toUpperCase() +
                        course.language.slice(1)}
                    </div>
                    <p className="text-green-600 text-xs mt-3">
                      View Video Series
                    </p>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherVideoSeries;
