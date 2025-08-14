import axios, { AxiosError } from "axios";
import { API_URL } from "../config/Constant";

// Define the expected login response shape
interface LoginResponse {
    access: string;
    refresh: string;
    user?: {
      id: number;
      username: string;
    };
  }
  

// Exported login function
export async function login(
  username: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}login`, {
      username,
      password
    });

    // Store tokens in localStorage
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    console.log("Tokens stored:", {
      access: localStorage.getItem("access"),
      refresh: localStorage.getItem("refresh")
    });

    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    if (error.response) {
      console.error("Login failed", error.response.data);
    } else {
      console.error("Error", error.message);
    }
    throw error;
  }
}

