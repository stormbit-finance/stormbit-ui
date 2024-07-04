import axios from "axios";

const api = axios.create({
  baseURL: "https://www.api.stormbit.finance/",
  withCredentials: false,
});

export default api;
