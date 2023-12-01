import React from "react";
import './Navbar.css';
import Navbar from './Navbar';
import './Layout.css'; // CSS file for layout styling

function Home() {
  return (
    <div className="text-align">
       <Navbar className="Navbar" /> 
        <h1>Home Page</h1>
        <p>Field tracking:
The information available in the Field tracking page provides you with an audit trail of your organizing teams field activity including these key data points:
Attempts - this metric is used to measure how many interactions (successful or unsuccessful) have been recorded by the organizer
Hit Rate % - this measures the performance of the level of successful interactions compared to total interactions
Last seen - this refers to the last time the organizer completed an interaction




What is Field Tracking?
Tracking organizer movements and organizer activity is a necessary part of any field organizing operations for a variety of reasons ranging from auditing, security, and efficiency management. You can view your organizers in real-time, with access to relevant information which will enable you to meet your operational needs.
All your organizer activity information is located on the Field Tracking page within your Ecanvasser dashboard:
</p>
    </div>

 )
}

export default Home;
