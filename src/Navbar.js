import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ideaImage from './idea.png';
import profileImage from './profile.png';
import navIcon from './nav.png'; // Import the nav icon
import ProfilePopup from './ProfilePopup';
import ProfileData from './ProfileData';
import navClosedIcon from './nav-Closed.png'; // Import the closed icon


function Navbar() {
    const [isActive, setIsActive] = useState(true);
    const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const toggleProfilePopup = () => {
        setProfilePopupOpen(!isProfilePopupOpen);
    };


    return (
        <>
               <button onClick={toggleNavbar} className="toggle-button">
               <img src={isActive ? navIcon : navClosedIcon} alt="Toggle Menu" style={{ height: '3rem' }} />

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
                    <li className='nav-item'><NavLink to="/Contacts" activeClassName="active">Contacts</NavLink></li>
                </ul>
               

                <ul className="BottomMenu">
                <li>
                    <button onClick={toggleProfilePopup} style={{ background: 'none', border: 'none' }}>
                        <img src={profileImage} alt="profile" style={{ height: '4rem' }} />
                    </button>
                    <ProfilePopup 
                isOpen={isProfilePopupOpen} 
                onClose={toggleProfilePopup} 
                profileData={ProfileData}
            />
                </li>
                    <li>
                        <NavLink to="/Account" activeClassName="active">Account</NavLink>
                    </li>
                </ul>
                <ProfilePopup isOpen={isProfilePopupOpen} onClose={toggleProfilePopup} />
            </nav>
        </>
    );
}

export default Navbar;


