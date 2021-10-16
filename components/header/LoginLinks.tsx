import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Auth from '../router/Auth';
import HttpService from '../../components/services/HttpService';

export default function LoginLink() {
  const router = useRouter();
  const [login, setLogin] = useState('');

  useEffect(() => {
    
    HttpService.get('/auth/discord/login')
      .then((response) => {
        const { url } = response.data;
        setLogin(url);
      })
  }, [])
 
  return (
    <>

      {Auth.isAuthenticated() ? (
        
        <button onClick={() => router.push('/me')} className="box-border relative inline-flex items-center justify-center w-auto px-4 py-1 ml-2 overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-blue-400 hover:to-green-400 transition-all duration-300 rounded shadow hover:shadow-card dark:bg-gray-800 dark:hover:bg-indigo-500 focus:outline-none">
          <span className="relative z-20 flex items-center text-xs">Crater</span>
        </button>
       

      ) : (
        <>
          <Link href={login}>
            <button className="box-border relative inline-flex items-center justify-center w-auto px-4 py-1 ml-2 overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-blue-400 hover:to-green-400 transition-all duration-300 rounded shadow hover:shadow-card dark:bg-gray-800 dark:hover:bg-indigo-500 focus:outline-none">
            <span className="relative z-20 flex items-center text-xs">Login</span>
            </button>
          </Link>
          <a href="#" className="ml-4 text-sm font-medium text-gray-700 dark:text-gray-100 dark:hover:text-white hover:underline">
            Crear cuenta
          </a>

        </>
        
      )}
    </>
  )
}
