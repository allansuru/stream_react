import axios from "axios";
import axiosRetry from "axios-retry";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosRetry(instance, { retries: 3 });

export default instance;
