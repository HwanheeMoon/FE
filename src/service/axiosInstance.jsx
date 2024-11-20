import axios from "axios";
import {Cookies} from "react-cookie";

const cookie = new Cookies();
//console.log(document.cookie.replace("Authorization=",  ""))

const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
    timeout : 10000,
    headers : {
        'Authorization' : `Bearer ${cookie.get("Authorization")}`,
        'Content-Type': 'application/json'
    },
})

export default axiosInstance;