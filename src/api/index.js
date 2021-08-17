import axios from 'axios';

let baseURL = "http://localhost:8000/"
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/";
} else {
    // production code
}

const token = localStorage.getItem("token");

export const api = axios.create({
    baseURL : baseURL,
    headers: {
        Authorization : token ? "Token " + token : null,
        "Content-Type":"application/json",
        accept:"application/json",
    },
})