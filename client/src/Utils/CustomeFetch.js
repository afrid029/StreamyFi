import axios from "axios";
export const CustomeFetch = axios.create({
    baseURL: '/api/'
})