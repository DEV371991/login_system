import axios from "axios";
import { API_URL } from "../config/Constant";


const api = axios.create({
  baseURL: API_URL, // example
  headers: { "Content-Type": "application/json" },
});

export default api;
