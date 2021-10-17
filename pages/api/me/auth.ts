import axios from 'axios';
import Http from "../../../components/services/HttpService"

export default async function handler(req, res) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
  // Get data from your database
  const { data } = await Http.get("/user");
  console.log(req.cookies.access_token)
 
  res.status(200).json(data[0])
 
}