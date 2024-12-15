import axios from "axios";

const RECOMMENDATION_URL = axios.create({
    baseURL: "http://10.0.2.2:5000",
    headers:{
        "Content-Type": "application/json",
    }
}) ;


export default RECOMMENDATION_URL;