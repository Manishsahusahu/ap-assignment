import axios from "axios";

const url =
  "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi";

export const getFAQsData = async function () {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
