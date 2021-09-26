import React from "react";
import NavBar from '../components/header/Navbar';
import {ViewBoardsIcon, TerminalIcon, ViewGridIcon, ServerIcon} from '@heroicons/react/solid';

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
                    <li className="flex items-center font-medium pl-3 py-2 mb-1 cursor-pointer hover:bg-gray-200 menu-not-active dark:hover:bg-gray-900 hover:rounded">
                      <ServerIcon className="h-7 w-7 mr-2" />
                      MyBOT List
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
                <div className="mt-20 mb-16 md:mt-20 sm:mt-14">
                  <main>
                    <div>
                      <div className="mb-10">
                        <div>
                          <div className="mb-3">
                            <a className="cursor-pointer" href="https://portalmybot.com/list">
                              <div className="rounded-lg mx-2 cursor-pointer text-left bg-white hover:bg-opacity-50 border-b group border-gray-200 shadow-card dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
                                <div className="rounded rounded-b-none">
                                  <span>
                                    <img className="w-full h-56 md:h-64 md:object-cover rounded-lg rounded-b-none" src="https://i.imgur.com/Juh672X.png" alt="test"/>
                                  </span>
                                </div>
                                <div className="px-4 py-4 rounded-b-lg md:px-4 lg:px-6 xl:px-6">
                                  <div className="text-justify line-clamp">
                                    <div className="flex flex-row items-center justify-between flex-1 mb-3">
                                      <div className="flex flex-row items-center justify-between">
                                        <div className="flex items-center justify-center flex-shrink-0 object-cover w-8 h-8 mr-2 bg-gray-200 rounded-full dark:bg-gray-700">
                                          <div className="block object-cover w-full h-full">
                                            <span>
                                              <img className="rounded-full object-cover w-full h-full md:mx-0 md:mr-2 rounded-lg" src="https://i.imgur.com/DC0Kp0D.png" alt="test" />
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flex flex-col leading-snug">
                                          <a href="/" rel="noopener noreferrer" className="text-gray-800 group-hover:text-red-600 dark:group-hover:text-red-400 capitalize dark:text-gray-100 hover:underline flex items-center cursor-pointer">
                                              CraterMaik
                                          </a>
                                          <span className="text-xs text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 dark:text-gray-400">Sep 25, 2021</span>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-between mb-4 overflow-hidden break-words">
                                    <div className="flex flex-row flex-wrap flex-grow-0 w-full">
                                      <div className="flex-auto w-full pr-0 md:w-auto group md:flex-1 md:pr-5">
                                        <h1 className="mb-3 text-2xl group-hover:text-indigo-500">Que es PortalMyBOT?</h1>
                                        <p className="leading-normal text-gray-700 break-words break-all line-clamp-3 dark:text-gray-300">Es una plataforma con diferentes guías y herramientas en español, orientadas al desarrollo de apps/bots y contenido para comunidades de discord...</p>

                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-center justify-end">
                                    <div className="flex flex-row justify-start overflow-hidden truncate flex-nowrap">
                                      <div className="flex flex-row flex-wrap items-center my-2 mr-1 text-xs text-gray-700 bg-transparent rounded-full">
                                        <span className="bg-indigo-200 flex rounded-full text-gray-800 dark:text-gray-300 bg-indigo-100 dark:bg-gray-700 px-2 mr-1">Php</span>

                                      </div>
                                    </div>
                                    <span className="flex justify-between">
                                      <div className="flex justify-between">
                                        <p className="flex items-center justify-between mx-2 text-xs text-left rounded-full">
                                          <span>3</span>
                                        </p>

                                      </div>
                                      <p className="inline-block px-1 m-0 text-xs truncate bg-gray-200 rounded-lg rounded-r-sm dark:bg-gray-700">
                                        2 min read
                                      </p>

                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
            </div>
            <div className="false top-0 hidden h-full overflow-hidden lg:block w-1/5 flex-none">

            </div>
        </div>
     </div>
    </>

  )
}
