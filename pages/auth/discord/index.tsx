import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthService from '../../../services/AuthService';
import Http from '../../../services/HttpService';

const Login = () => {
  const router = useRouter()
 
  useEffect(() => {

    Http.get(`/auth/discord/callback/${window.location.search}`)
    .then(res => {

      if(res.statusText === 'OK') {
        AuthService.handleLoginSuccess(res.data, true)
        router.push('/')

      } else {
        if (res.statusText === 'error') {
          router.push('/error')
        }
      }
    })
    .catch(error => {
      router.push('/error')
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