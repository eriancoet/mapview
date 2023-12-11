import React from "react";
import Navbar from './Navbar'; // Assuming this is your navigation component
import './tasklist.css'; // CSS file for layout styling
import ClientList from './ClientList';


function TaskList() {
  return (
    <div className="layout-container">
      <Navbar className="Navbar" /> 

      <div className="content-container">
        <h1>Task List</h1>
        <ClientList className="ClientList" />
      </div>
    </div>
  );
}


export default TaskList;
