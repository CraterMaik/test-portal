import React, { useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
import {useRouter} from 'next/router';
import Auth from '../router/Auth';
import Http from '../../components/services/HttpService';
import useSwr from 'swr';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function LoginLink() {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const { data: user, error } = useSwr('/api/me/auth', fetcher)

  useEffect(() => {
    
    Http.get('/auth/discord/login')
      .then((response) => {
        const { url } = response.data;
        setLogin(url);
      })

  }, [])
  if (error) return <div>Failed to load users</div>
  if (!user) return <div>Loading...</div>
  return (
    <>
      {Auth.isAuthenticated() ? (
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-gray-700 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.social_avatarUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white')}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white')}
                  >
                    Settings
                  </a>
                          )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white')}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
      </Menu>
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
