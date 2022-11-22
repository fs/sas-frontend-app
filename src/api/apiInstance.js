import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_URI,
});

export default apiInstance;
