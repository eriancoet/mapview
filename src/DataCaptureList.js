import React from "react";
import Navbar from './Navbar'; // Assuming this is your navigation component
import './styles/tasklist.css'; // CSS file for layout styling
import ClientList from './ClientList';


function DataCaptureList() {
  return (
    <div className="layout-container">
      <Navbar className="Navbar" /> 

      <div className="content-container">
        <h1>Data Capture List</h1>
        <ClientList className="ClientList" />
      </div>
    </div>
  );
}


export default DataCaptureList;

