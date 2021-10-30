import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Http from "../../../components/services/HttpService"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  try {
    if(req.cookies.access_token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
      
      const { data } = await Http.get("/user");
      res.status(200).json(data[0]);
      
    } else {
      res.status(400).json({data: null});
      
    }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    
  }
 
}