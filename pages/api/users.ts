import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Http from '../../components/services/HttpService';

type Data = {
  data: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Get data from your database
  axios.defaults.headers.common['Authorization'] = `Bearer ${req.cookies.access_token}`;
  const { data } = await Http.get("/home/bots");

  res.status(200).json(data)
}
