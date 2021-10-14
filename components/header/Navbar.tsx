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
        <SunIcon className="w-7 h-7 ml-2 mr-2" role="button" onClick={() => setTheme('light') } />
      );
    } else {
      return (
        <MoonIcon className="w-7 h-7 ml-2 mr-2" role="button" onClick={() => setTheme('dark') } />
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
               className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-white dark:bg-gray-800"
               onClick={() => setOpen(false)}

              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
             </div>

             <div className="border-t border-gray-200 py-6 px-4 space-y-6">
               <div key="navi-key10" className="flow-root">
                 <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    page Name
                 </a>
               </div>
               <div className="flow-root">
                 <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                   Create account
                 </a>
               </div>
             </div>
             <div className="border-t border-gray-200 py-6 px-4">
               <a href="#" className="-m-2 p-2 flex items-center">
                 <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span className="sr-only">, change currency</span>
               </a>

             </div>
           </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

       <header className="fixed top-0 z-10 w-full mt-0 bg-white bg-opacity-95 shadow-card dark:bg-gray-900 backdrop-filter backdrop-blur-2x1">
         <nav aria-label="Top" className="max-w-7x1 mx-auto px-4 sm:px-9 lg:px-8">
           <div>
             <div className="h-14 flex items-center">
                <button type="button" className="bg-white p-2 rounded-md text-white dark:text-white bg-gray-800 dark:bg-gray-800 lg:hidden" onClick={() => setOpen(true)}>
                 <span className="sr-only">Open menu</span>
                 <MenuIcon className="h-6 w-6" aria-hidden="true" />

                </button>

                {/* Logo */}
                <div className="ml-4 flex items-center lg:ml-0" aria-label="Home" data-balloon-pos="right">
                  <a aria-current="page" href="/" className="flex flex-row -m-2 overflow-hidden text-gray-900 no-underline cursor-pointer sm:mr-4 hover:text-gray-800 dark:text-gray-100 hover:no-underline">
                    <img src="./portalmybotLogo.png" className="h-7 w-auto overflow-hidden" draggable="false" alt="Portalmybot" loading="lazy" />
                    <div className="flex-col justify-end hidden pl-4 text-sm lg:flex">Portal MyBOT</div>
                  </a>
                </div>
                
                <div className="ml-auto flex items-center">
                 {renderThemeChanger()}
                  <LoginLink />
                </div>

             </div>
           </div>
         </nav>
       </header>
     </div>
      
  )
}
