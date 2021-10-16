import type { NextApiRequest, NextApiResponse } from 'next'
import Http from '../../components/services/HttpService';

type Data = {
  data: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Get data from your database
  const { data } = await Http.get("/home/bots");
 
  res.status(200).json(data)
}