import React, { useEffect, useState } from "react";
import Header from "../Main page components/Header";
import { getPageData } from "../../api call/getPageData";
import VideoSeries from "../Main page components/VideoSeries";

const MainPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const runFunction = async () => {
      const result = await getPageData();
      console.log(result);
      setData(result);
    };
    runFunction();
  }, []);

  return (
    <div className="relative">
      {data && (
        <div>
          <Header courseDetails={data.details} />
          <VideoSeries courses={data.courses} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
