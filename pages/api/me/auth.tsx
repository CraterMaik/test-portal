import type { NextApiRequest, NextApiResponse } from 'next'
import Http from "../../../components/services/HttpService"
import CookieService from '../../../components/services/CookieService'

export default async function handler(req, res) {
  // Get data from your database
  //const { data } = await Http.get("/user");
  const token = CookieService.get("access_token");
  console.log(token)
 // res.status(200).json(data[0])
  res.status(200).json({ name: 'John Doe 2', token: token })
}