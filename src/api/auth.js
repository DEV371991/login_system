import axios from "axios";


const API_URL =  "http://127.0.0.1:8000/api/login/";

export async function login(username,password){
    try{
        const response = await axios.post(`${API_URL}`,{
            username,
            password
        });

        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        console.log(localStorage)
        return response.data
    }catch(error){
        if (error.response) {
        console.error("Login failed",error.response.data);
        }else{
            console.error("Erroe", error.message);
        }
        throw error
    }


}
