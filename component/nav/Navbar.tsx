  
import {useState,useEffect,Fragment} from 'react';
import {useTheme} from 'next-themes';
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
    console.log(currentTheme)
    if (currentTheme === 'dark') {
      return (
        <SunIcon className="w-7 h-7 mr-4" role="button" onClick={() => setTheme('light') } />
      );
    } else {
      return (
        <MoonIcon className="w-7 h-7 mr-4" role="button" onClick={() => setTheme('dark') } />
      );
    }
  }

  return (
    <>
      <div className="fixed top-0 z-10 w-full py-3 mt-0 bg-white bg-opacity-95 shadow-card dark:bg-gray-900 backdrop-filter backdrop-blur-2x1">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-start text-white lg:w-1/2 md:w-1/4">
            <button aria-label="Sidebar" className="ml-5 mr-3 text-gray-900 dark:text-gray-100 focus:outline-none lg:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"></path></svg>
            </button>
            <div className="flex items-center" aria-label="Home" data-balloon-pos="right">
              <a aria-current="page" href="/" className="flex flex-row overflow-hidden text-gray-900 no-underline cursor-pointer sm:mr-4 hover:text-gray-800 dark:text-gray-100 hover:no-underline">
                <img src="https://i.imgur.com/kU6Y9Ac.png" className="w-7 h-6 overflow-hidden" draggable="false" alt="Portalmybot" loading="lazy" />
                <div className="flex-col justify-end hidden pl-4 text-sm lg:flex">Portal MyBOT</div>
              </a>
            </div>
          </div>
          <div className="flex content-center justify-end md:flex lg:w-1/2 md:w-3/4 md:justify-end">
            <ul className="flex items-center justify-end flex-1 md:flex-none">
              {renderThemeChanger()}
              <li className="flex flex-row items-center mr-5 cursor-pointer lg:mr-0">
                <button className="box-border relative inline-flex items-center justify-center w-auto px-4 py-1 ml-2 overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-blue-400 hover:to-green-400 transition-all duration-300 rounded shadow hover:shadow-card dark:bg-gray-800 dark:hover:bg-indigo-500 focus:outline-none">
                  <span className="relative z-20 flex items-center text-xs">Login</span>
                </button>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  )
}