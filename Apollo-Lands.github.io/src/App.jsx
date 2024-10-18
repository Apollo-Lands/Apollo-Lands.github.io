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
import './App.css';




function App() {


  return (
    <>

      <NavBar/>
      <div id="offerAlert">
        Have questions about an Offer Letter you received in the Mail? 
        <Link> Click Here</Link> 
      </div>


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
