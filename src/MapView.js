import React from "react";
import Map from './Map';
import './Navbar.css';
import ClientList from './ClientList';
import './MapView.css'; // Import your new CSS file

function MapView() {
  return (
    <div className="map-view-container">
        <h1>Map View</h1>
        <div className="content">
            <Map />
            <ClientList />
        </div>
    </div>
  )
}

export default MapView;
