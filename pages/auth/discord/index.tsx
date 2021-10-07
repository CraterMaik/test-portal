import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthService from '../../../services/AuthService';
import Http from '../../../services/HttpService';

interface Props {
  location: string;
}

const Login: FC<Props> = ({ location }) => {
  const router = useRouter()
  console.log(location)
  location.search
  useEffect(() => {

    Http.get(`/auth/discord/callback/${location.search}`)
    .then(res => {
      AuthService.handleLoginSuccess(res.data, true)
      router.push('/me')
    })
    .catch(error => console.log(error));

  }, [location]);

  return (
    <div>
      Cargando...
    </div>
  )
}
export default Login;