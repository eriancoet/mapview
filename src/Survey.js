import React from "react";
import './Navbar.css';
import Navbar from './Navbar';
import './Layout.css'; 
import SurveyMain from './Survey';


function Home() {
  return (
    <div className="layout-container">
    <Navbar className="Navbar" />    
    <SurveyMain />
  

    </div>

   
 )
}

export default Home;
