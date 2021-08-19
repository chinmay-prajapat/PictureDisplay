import axios from "axios";
require("dotenv").config();
// console.log(process.env.REACT_APP_KEY);
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: process.env.REACT_APP_KEY,
  },
});
