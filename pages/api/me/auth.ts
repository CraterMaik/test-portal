import axios from 'axios';
import Http from "../../../components/services/HttpService"

export default async function handler(req, res) {
  
  if(req.cookies.access_token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
    // Get data from your database
    const { data } = await Http.get("/user");
    res.status(200).json(data[0]);
    
  } else {
    
    res.status(400).json({data: null});
  }
 
}