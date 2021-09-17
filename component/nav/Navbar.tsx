  
import {useState,useEffect,Fragment} from 'react';
import {useTheme} from 'next-themes';
import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon, BellIcon} from '@heroicons/react/outline';
import {MoonIcon, SunIcon} from '@heroicons/react/solid';
import { classNames } from '../utils/classNames';

export default function NavBar() { 
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
   
  }, [])
  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('light') } />
      );
    } else {
      return (
        <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark') } />
      );
    }
  }

  return (
    <Disclosure as="nav" className="z-40 bg-gradient-to-r from-gray-900 to-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://i.imgur.com/kU6Y9Ac.png"
                    alt="portalmybot"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://i.imgur.com/kU6Y9Ac.png"
                    alt="portalmybot"
                  />
                </div>
              </div>
               
               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {renderThemeChanger()}
              </div>
            </div>
          </div>
          
        </>
      )}
    </Disclosure>
  )
}