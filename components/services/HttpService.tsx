import axios from "axios";
import CookieService from "./CookieService";

const token = CookieService.get("access_token");

export default axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`,
    
  }
  
});
