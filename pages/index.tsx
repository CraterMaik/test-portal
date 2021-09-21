import React from "react";
import NavBar from '../components/header/Navbar';

export default function Home() {

  return (
    <>
     <NavBar />
     <div className="container mx-auto">
        <div className="flex">
            <div className="sticky top-0 flex-col justify-between flex-none hidden w-1/6 h-full max-h-screen min-h-screen overflow-hidden text-sm lg:flex dark:text-gray-100">
             
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
