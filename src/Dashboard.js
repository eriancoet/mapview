import React from "react";
import Navbar from './Navbar'; // Assuming this is your navigation component
import './Layout.css'; // CSS file for layout styling

function Dashboard() {
  return (
   
        <div className="layout-container">
    <Navbar className="Navbar" /> 
   <h1>Dashboard</h1>

    </div>
  );
}


export default Dashboard;
