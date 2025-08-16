import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://reqres.in/api";
const API_KEY = process.env.REACT_APP_API_KEY || "reqres-free-v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default apiClient;
