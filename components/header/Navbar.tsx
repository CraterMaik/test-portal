import {useState,useEffect,Fragment } from 'react';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon, BellIcon, MenuIcon, XIcon} from '@heroicons/react/solid';
import {Disclosure, Menu, Transition, Dialog, Popover, Tab} from '@headlessui/react';

import LoginLink from './LoginLinks';
import {classNames} from '../utils/className';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];



export default function NavBar() { 
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
   
  }, [])

  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if (currentTheme === 'dark') {
      return (
        <SunIcon className="w-7 h-7 mr-2 ml-2" role="button" onClick={() => setTheme('light') } />
      );
    } else {
      return (
        <MoonIcon className="w-7 h-7 mr-2 ml-2" role="button" onClick={() => setTheme('dark') } />
      );
    }
  }

  return (
     <div>
       
      <Disclosure as="nav" className="fixed top-0 z-10 w-full mt-0 bg-white bg-opacity-95 shadow-card dark:bg-gray-900 backdrop-filter backdrop-blur-2x1">
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
              <div className="flex items-center justify-between h-14">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a aria-current="page" href="/" className="flex flex-row overflow-hidden text-gray-900 no-underline cursor-pointer sm:mr-4 hover:text-gray-800 dark:text-gray-100 hover:no-underline">
                      <img src="https://i.imgur.com/kU6Y9Ac.png" className="w-7 h-6 overflow-hidden" draggable="false" alt="Portalmybot" loading="lazy" />
                      <div className="flex-col justify-end hidden pl-4 text-sm lg:flex">Portal MyBOT</div>
                    </a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                     <button
                      type="button"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {renderThemeChanger()}
                    
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>

                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" onClick={() => setOpen(false)} />
                    ) : (
                      <MenuIcon
                        className="block h-6 w-6"
                        aria-hidden="true" onClick={() => setOpen(true)}
                      />
                    )}
                   
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            
            <Disclosure.Panel className="md:hidden">
             
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  {renderThemeChanger()}
                </div>
                
                <div className="mt-3 px-2 space-y-1">
                  
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

            </Disclosure.Panel>

          </>
        
      </Disclosure>

     </div>
      
  )
}

/* 
<div className="fixed top-0 z-10 w-full py-3 mt-0 bg-white bg-opacity-95 shadow-card dark:bg-gray-900 backdrop-filter backdrop-blur-2x1">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-start text-white lg:w-1/2 md:w-1/4">
            <button aria-label="Sidebar" className="ml-5 mr-3 text-gray-900 dark:text-gray-100 focus:outline-none lg:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" fillRule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"></path></svg>
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
                <LoginLink />
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    
*/