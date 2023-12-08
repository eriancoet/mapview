import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ideaImage from './idea.png'; // Import the image

function Navbar() {
    const [isActive, setIsActive] = useState(true); // State to manage whether the navbar is active

    const toggleNavbar = () => {
        setIsActive(!isActive); // Function to toggle the navbar state
    };

    return (
        <>
            <button onClick={toggleNavbar} className="toggle-button">
                {/* Here you can add an icon or text for the toggle button */}
            </button>
            <nav className={`navbar ${isActive ? 'active' : 'inactive'}`}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <NavLink to="/" exact activeClassName="active">
                            <img src={ideaImage} alt="idea" style={{ height: '4rem' }} />
                        </NavLink>
                    </li>
                    <li className='nav-item'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li className='nav-item'><NavLink to="/Survey" activeClassName="active">Survey</NavLink></li>
                    <li className='nav-item'><NavLink to="/Dashboard" activeClassName="active">Dashboard</NavLink></li>
                    <li className='nav-item'><NavLink to="/DataCaptureList" activeClassName="active">Data Capture List</NavLink></li>
                    <li className='nav-item'><NavLink to="/Layout" activeClassName="active">Map View</NavLink></li>
                    <li className='nav-item'><NavLink to="/MapList" activeClassName="active">Map List</NavLink></li>
                    <li className='nav-item'><NavLink to="/TaskList" activeClassName="active">Task List</NavLink></li>
                </ul>
                <ul className="BottomMenu">
                    <li>
                        <NavLink to="/Profile" activeClassName="active">Profile Icon</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Account" activeClassName="active">Account</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
