import React from "react";
import Navbar from './Navbar'; // Assuming this is your navigation component
import Map from './Map'; // Your Google Map component
import './styles/Layout.css'; // CSS file for layout styling
import ClientList from './ClientList';

function Layout() {
  return (
    <div>
  
    <div className="layout-container">
  
    <Navbar className="Navbar" /> 
  
    <Map className="Map" />
    <div>
    <h1 className="HeadingMap">Map View</h1>
    </div>
    <ClientList className="ClientList" />

    </div>
    </div>
  );
}

export default Layout;
