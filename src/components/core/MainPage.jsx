import React, { useEffect, useState } from "react";
import Header from "../Main page components/Header";
import { getPageData } from "../../api call/getPageData";

const MainPage = () => {

    const [courseDetails, setCourseDetails] = useState(null)

  useEffect(() => {
    const runFunction = async () => {
      const result = await getPageData();
      console.log(result);
      setCourseDetails(result.details);
    };
    runFunction();
  }, []);

  return (
    <div>
      <Header courseDetails= {courseDetails} />
    </div>
  );
};

export default MainPage;
