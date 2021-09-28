import React from "react";
import NavBar from '../components/header/Navbar';
import Nav from '../components/sections/Nav';
import Home from '../components/sections/Home';
import NavRight from '../components/sections/NavRight';

export default function App() {

  return (
    <>
     <NavBar />
     <div className="container mx-auto">
        <div className="flex">
          <Nav />
          <Home />
          <NavRight />
        </div>
     </div>
    </>

  )
}
