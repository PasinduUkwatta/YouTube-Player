import axios from "axios"

const KEY ="AIzaSyDzZLzRMhgxwg2n9R-J0GF6ofaj-C3rkHY"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key :KEY,

    }
})


