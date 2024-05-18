import axios from "axios";
const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : `${process.env.REACT_APP_BACKEND_LINK}`,
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
