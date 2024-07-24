import axios from "axios";
import config from "./config";

const api = axios.create({
    baseURL: config.VITE_BASE_URL,
    params:{
        api_key:config.VITE_API_KEY,
    }
});


export default api;