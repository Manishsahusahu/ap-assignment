import axios from 'axios'

const URL= 'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3'

export const getPageData= async function(){
    try {
        const result = await axios.get(URL)
        return result.data;
    } catch (error) {
        console.log(error); 
    }
}