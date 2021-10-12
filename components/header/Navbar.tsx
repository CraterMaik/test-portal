import {useState,useEffect,Fragment } from 'react';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon, BellIcon, MenuIcon, XIcon, SearchIcon, ShoppingBagIcon} from '@heroicons/react/solid';
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
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
           as={Fragment}
           enter="transition-opacity ease-linear duration-300"
           enterFrom="opacity-0"
           enterTo="opacity-100"
           leave="transition-opacity ease-linear duration-300"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
          >
           <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
           <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
             <div className="px-4 pt-5 pb-2 flex">
              <button
               type="button"
               className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
               onClick={() => setOpen(false)}

              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>

             </div>
           </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

       <header className="fixed top-0 z-10 w-full mt-0 bg-white bg-opacity-95 shadow-card dark:bg-gray-900 backdrop-filter backdrop-blur-2x1">
         <nav aria-label="Top" className="max-w-7x1 mx-auto px-4 sm:px-9 lg:px-8">
           <div className="border-b boder-gray-200">
             <div className="h-16 flex items-center">
                <button type="button" className="bg-white p-2 rounded-md text-gray-400 lg:hidden" onClick={() => setOpen(true)}>
                 <span className="sr-only">Open menu</span>
                 <MenuIcon className="h-6 w-6" aria-hidden="true" />

                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto" src="https://i.imgur.com/kU6Y9Ac.png" alt="Logo Portalmybot" />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch" >
                 <div className="h-full flex space-x-8">
                   <Popover key="x-1" className="flex">
                    {({open}) => (
                     <>
                      <div className="relative flex">
                        <Popover.Button 
                         className={classNames(
                          open
                           ? 'border-indigo-600 text-indigo-600'
                           : 'border-transparent text-gray-700 hover:text-gray-800',
                          'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                         )}>
                           Categoria
                        </Popover.Button>
                      </div>

                      <Transition 
                       as={Fragment}
                       enter="transition ease-out duration-200"
                       enterFrom="opacity-0"
                       enterTo="opacity-100"
                       leave="transition ease-in duration-150"
                       leaveFrom="opacity-100"
                       leaveTo="opacity-0"
                      >
                       <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                          <div className="relative bg-white">
                           <div className="max-w-7xl mx-auto px-8">
                            <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                             <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              <div key="item-11" className="group relative text-base sm:text-sm">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                  <img
                                    src='https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg'
                                    alt='img'
                                    className="object-center object-cover"
                                   />
                                 </div>
                                 <a href="#" className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute z-10 inset-0" aria-hidden="true" />
                                  item name
                                 </a>
                                 <p aria-hidden="true" className="mt-1">
                                  Show now
                                 </p>

                              </div>
                             </div>
                             <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                               <div key="section-11">
                                 <p id="name-heading" className="font-medium text-gray-900">
                                  section name
                                 </p>
                                 <ul role="list"
                                  aria-labelledby={`label-heading`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                   <li key='item-label11' className="flex">
                                     <a href='#' className="hover:text-gray-800">
                                       item Name
                                     </a>
                                  </li>
                                 </ul>
                               </div>
                             </div>
                            </div>
                           </div>
                          </div>
                       </Popover.Panel>
                      </Transition>
                     </>
                    )}
                   </Popover>
                   <a key="nav-33" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800" href="#">
                    page Name
                   </a>
                 </div>

                </Popover.Group>
                <div className="ml-auto flex items-center">
                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                   sing in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                 </div>
                 <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                   <img 
                     src="https://tailwindui.com/img/flags/flag-canada.svg"
                     alt=""
                     className="w-5 h-auto block flex-shrink-0" />
                     <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                 </div>
                 {/* Search */}
                 <div className="flex lg:ml-6">
                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                     <span className="sr-only">Search</span>
                     <SearchIcon className="w-6 h-6" aria-hidden="true" />
                   </a>
                 </div>

                 {/* Cart */}
                 <div className="ml-4 flow-root lg:ml-6">
                   <a href="#" className="group -m-2 p-2 flex items-center">
                     <ShoppingBagIcon
                       className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                       aria-hidden="true"
                     />
                     <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                     <span className="sr-only">items in cart, view bag</span>
                   </a>
                 </div>

                </div>

             </div>
           </div>
         </nav>
       </header>
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