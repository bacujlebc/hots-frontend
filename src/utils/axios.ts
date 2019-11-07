import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3001/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

Axios.interceptors.response.use(
  function(response) {
    const {
      config: { url },
      data: { token }
    } = response;
    if (url && url.includes("login") && token) {
      localStorage.setItem("token", token);
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Axios;
