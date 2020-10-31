import axios from "axios"

const KEY ="AIzaSyBpuy4PTjd7GZflbAUnOxtPyg6IlKDe3yA"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key :KEY,

    }
})


