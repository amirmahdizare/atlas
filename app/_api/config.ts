import axios from "axios";
import { getToken } from "utils";

export const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API,
    headers:{
        Authorization:`bearer ${getToken()}`
    }
})