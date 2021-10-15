import type { NextApiRequest, NextApiResponse } from 'next'
import Http from "../../../services/HttpService"

export default async function handler(req, res) {
  // Get data from your database
  const { data } = await Http.get("/user");
  //console.log(data)
 // res.status(200).json(data[0])
}