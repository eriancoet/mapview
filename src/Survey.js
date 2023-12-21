import React from "react";
import './styles/Navbar.css';
import Navbar from './Navbar';
import './styles/Layout.css'; 
import SurveyMain from './SurveyMain';


function Survey() {
  return (
    <div className="layout-container">
    <Navbar className="Navbar" />    
    <SurveyMain />
  

    </div>
  
 )
}

export default Survey;
