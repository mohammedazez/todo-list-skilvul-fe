import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

Axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
