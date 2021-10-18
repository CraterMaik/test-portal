import axios from 'axios';
import Http from "../../../components/services/HttpService"
import CookieService from '../../../components/services/CookieService';

export default async function handler(req, res) {
  
  if(req.cookies.access_token) {
    //axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
    // Get data from your database
    await Http.get("/logout");
    
    CookieService.remove('access_token');
  }
 
}