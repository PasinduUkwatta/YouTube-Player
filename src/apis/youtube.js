import axios from "axios"

const KEY ="AIzaSyDXTF2_fJk7429Ul7zOJ622myjQybT6FEw"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key :KEY,

    }
})


