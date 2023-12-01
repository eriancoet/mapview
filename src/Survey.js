import React from "react";
import Navbar from './Navbar'; // Assuming this is your navigation component
import Map from './Map'; // Your Google Map component
import './Layout.css'; // CSS file for layout styling
import ClientList from './ClientList';// Assuming Navbar is in the same directory

function Survey() {
  return (
    <div className="layout-container">
    <Navbar className="Navbar" /> 
   
    <Map className="Map" />
    <ClientList className="ClientList" />

    </div>
  );
}

export default Survey;
