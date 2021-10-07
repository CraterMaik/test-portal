import { useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthService from '../../../services/AuthService';
import Http from '../../../services/HttpService';


export default function Login(props) {
  const router = useRouter()
  console.log(props)
  useEffect(() => {
    Http.get(`/auth/discord/callback/${props.location.search}`)
    .then(res => {
      AuthService.handleLoginSuccess(res.data, true)
      router.push('/me')
    })
    .catch(error => console.log(error));

  }, [props]);

  return (
    <div>
      Cargando...
    </div>
  )
}
