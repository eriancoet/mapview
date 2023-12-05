import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import ideaImage from './idea.png'; // Import the image


function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar'>
        <li className='nav ul li'><NavLink to="/" exact activeClassName="active"><img src={ideaImage} alt="idea" style={{ height: '4rem' }} /></NavLink></li>
        <li className='nav ul li'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li className='nav ul li'><NavLink to="/Survey" activeClassName="active">Survey</NavLink></li>
        <li className='nav ul li'><NavLink to="/Dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li className='nav ul li'><NavLink to="/DataCaptureList" activeClassName="active">Data Capture List</NavLink></li>
        <li className='nav ul li'><NavLink to="/Layout" activeClassName="active">Map View</NavLink></li>
        <li className='nav ul li'><NavLink to="/MapList" activeClassName="active">Map List</NavLink></li>
        <li className='nav ul li'><NavLink to="/TaskList" activeClassName="active">Task List</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
