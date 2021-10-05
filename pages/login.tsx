import React, { useEffect } from 'react';
import AuthService from '../services/AuthService';
import Http from '../services/HttpService';

export default function Login(props) {
  useEffect(() => {
    Http.get(`/auth/discord/callback/${props.location.search}`)
      .then(res => {
        AuthService.handleLoginSuccess(res.data, true)
        window.location.href = `http://localhost:3000/me`;
        
      })
      .catch(error => console.log(error));
      
  }, [props]);

  return (
    <div>
      Cargando...
    </div>
  )
}