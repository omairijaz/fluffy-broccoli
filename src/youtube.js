import axios from "axios";
const KEY = "AIzaSyCK6-lI1dkmN2v-YcA3X1uTZW5CUbXRe-0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
