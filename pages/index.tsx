import React from "react";
import NavBar from '../components/header/Navbar';
import {ViewBoardsIcon, TerminalIcon, ViewGridIcon} from '@heroicons/react/solid';

export default function Home() {

  return (
    <>
     <NavBar />
     <div className="container mx-auto">
        <div className="flex">
            <div className="sticky top-0 flex-col justify-between flex-none hidden w-1/6 h-full max-h-screen min-h-screen overflow-hidden text-sm lg:flex dark:text-gray-100">
              <div className="mt-24 md:mt-20">
                  <ul className="text-left list-inside">
                    <li className="flex items-center font-medium pl-3 py-2 mb-1 cursor-pointer hover:bg-gray-200 menu-not-active dark:hover:bg-gray-900 hover:rounded">
                      <ViewGridIcon className="h-7 w-7 mr-2" />
                      Guías
                    </li>
                    <li className="flex items-center font-medium pl-3 py-2 mb-1 cursor-pointer hover:bg-gray-200 menu-not-active dark:hover:bg-gray-900 hover:rounded">
                      <TerminalIcon className="h-7 w-7 mr-2" />
                      Códigos
                    </li>
                  </ul>
                  <hr className="my-4 border-gray-300 dark:border-gray-900" />
                  <h3 className="pl-2 mb-3 text-sm font-semibold text-left tracking-wider text-gray-900 dark:text-gray-100">
                    Otras Herramientas
                  </h3>
                  <ul className="text-left list-inside">
                    <li className="flex items-center font-medium pl-3 py-2 mb-1 cursor-pointer hover:bg-gray-200 menu-not-active dark:hover:bg-gray-900 hover:rounded">
                      <ViewBoardsIcon className="h-7 w-7 mr-2" />
                      Cursos
                    </li>
                    
                  </ul>
              </div>
            </div>
            <div className="h-full lg:w-2/4 flex-grow overflow-hidden md:mx-6">

            </div>
            <div className="false top-0 hidden h-full overflow-hidden lg:block w-1/5 flex-none">

            </div>
        </div>
     </div>
    </>

  )
}
