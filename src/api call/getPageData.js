import axios from 'axios'

export const getPageData= async function(){
    const result = await axios.get('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
    console.log(result.data)
    return result.data;
}