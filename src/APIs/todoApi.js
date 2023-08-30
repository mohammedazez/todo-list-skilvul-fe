import axios from "axios";

const Axios = axios.create({
  baseURL: "https://skilvul-todo-803865bd974c.herokuapp.com/api/v1",
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
