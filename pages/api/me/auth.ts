import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Http from "../../../components/services/HttpService"
import CookieService from '../../../components/services/CookieService'

export default async function handler(req, res) {
  // Get data from your database
  const { data } = await Http.get("/user");
  axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
 
  res.status(200).json(data[0])
 
}