import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthService from '../../../services/AuthService';
import Http from '../../../services/HttpService';

const Login = () => {
  const router = useRouter()
 
  useEffect(() => {

    Http.get(`/auth/discord/callback/${window.location.search}`)
    .then(res => {
      AuthService.handleLoginSuccess(res.data, true)
      router.push('/me')
    })
    .catch(error => {
      router.push('/404')
      console.log(error);
    });
      

  }, []);

  return (
    <div>
      Cargando...
    </div>
  )
}
export default Login;