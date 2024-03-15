import axios from "axios";
const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://capstone-backend-er7b.onrender.com",
  timeout: 50000,
  headers: {
    Accept: "application/json;charseet=UTF-8",
    Authorization: setTokenHeaders(),
  },
});

function setTokenHeaders() {
  const token = window.localStorage.getItem("jwtToken");
  return token ? `Bearer ${token}` : "";
}

export default AxiosInstance;
