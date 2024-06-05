/* eslint-disable no-undef */
import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: import.meta.env.Dev
    ? "http://localhost:8080"
    : `${import.meta.env.REACT_APP_BACKEND_LINK}`,
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
