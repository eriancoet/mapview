import React from "react";
import './Navbar.css';
import Navbar from './Navbar';
import Map from './Map';
import ClientList from './ClientList';
import './Layout.css'; 



function Home() {
  return (
    <div className="layout-container">
    <Navbar className="Navbar" />    
    <Map className="Map" />
    <ClientList className="ClientList" />

    </div>

   
 )
}

export default Home;
