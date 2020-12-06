import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3200",
});

export default axios;
