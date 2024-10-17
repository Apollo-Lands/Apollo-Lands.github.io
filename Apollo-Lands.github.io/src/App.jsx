import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import DroneVideography from "./components/DroneVideography";
import PurchaseLand from "./components/PurchaseLand";
import SellLand from "./components/SellLand";
import Home from "./components/Home";
import Footer from './components/Footer';
import {Link} from '@mui/material';



function App() {


  return (
    <>

      <NavBar/>
      <div>
        Have questions about an Offer Letter you received in the Mail? 
        <Link> Click Here</Link> 
      </div>

{/* <h1>The Best Investment On Earth, is EARTH!</h1> */}
{/* I want the route "/" to be its own home page. When I put this text as a test layout for it, 
The text incorrectly stays on all other subsequent pages clicked. I can do a work around if I make a "/home" page 
but I need to then either make "/home" the root... in which case I may have the same exact problem, or I need to figure 
out a way to make it so that the content here in "/" does not stick to other pages. */}


      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/DroneVideography" element={<DroneVideography/>} />
      <Route path="/PurchaseLand" element={<PurchaseLand/>} />
      <Route path="/SellLand" element={<SellLand/>} />

      </Routes>

      <Footer/>
    </>
  )
}

export default App
