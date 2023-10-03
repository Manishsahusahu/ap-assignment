import React, { useEffect, useState } from "react";
import Header from "../Main page components/Header";
import { getPageData } from "../../api call/getPageData";
import VideoSeries from "../Main page components/VideoSeries";
import OtherVideoSeries from "../Main page components/OtherVideoSeries";
import FAQs from "../Main page components/FAQs";
import { getFAQsData } from "../../api call/getFAQsData";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [faqdata, setFaqdata] = useState(null);

  useEffect(() => {
    const runFunction = async () => {
      const pageResult = await getPageData();
      setData(pageResult);
      const faqResult= await getFAQsData();
      setFaqdata(faqResult);
    };
    runFunction();
  }, []);

  return (
    <div className="relative">
      {data && (
        <div>
          <Header courseDetails={data.details} />
          <VideoSeries courses={data.courses} />
          <OtherVideoSeries courses={data.relatedContent} />
          <FAQs faqdata={faqdata} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
