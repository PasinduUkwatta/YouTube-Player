import axios from "axios"

const KEY ="AIzaSyCIv1OR4_IBGtc-K5f7bslxVBE3eEaeMWs"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key :KEY,

    }
})


