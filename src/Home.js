import React from "react";
import './styles/Navbar.css';
import Navbar from './Navbar';
import './styles/Layout.css'; 
import './styles/Home.css';


function Home() {
  return (
    <div className="layout-container">
    <Navbar className="Navbar" />    
    <h1>Home</h1>
  

    </div>

   
 )
}

export default Home;
