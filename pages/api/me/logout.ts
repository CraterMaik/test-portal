import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Http from "../../../components/services/HttpService";
import CookieService from '../../../components/services/CookieService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Entro a api')
  /* if(req.cookies.access_token) {
    //axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
    // Get data from your database
    //await Http.get("/logout");
    alert('Entro a api logout')
    CookieService.remove('access_token');
  } */
 
}