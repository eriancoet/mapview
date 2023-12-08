import React from "react";
import Navbar from './Navbar'; // Assuming this is your navigation component
import './Layout.css'; // CSS file for layout styling
import ClientList from './ClientList';


function TaskList() {
  return (
    <div className="layout-container">
    <Navbar className="Navbar" /> 
   
 
    <ClientList className="ClientList" />

    </div>
  );
}

export default TaskList;
