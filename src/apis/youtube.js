import axios from "axios"

const KEY ="AIzaSyB5FHluCvC0PzHr3UQ5W2wDJhdU-Xfoxxw"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key :KEY,

    }
})


