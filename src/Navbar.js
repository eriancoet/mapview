import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import profileImage from './Images/profile.png';
import navIcon from './Images/nav.png'; // Import the nav icon
import navClosedIcon from './Images/nav-Closed.png'; // Import the closed icon
import Modal from './Modal'; // Import Modal component

function Navbar() {
    const [isActive, setIsActive] = useState(true);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };


    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            
        <nav className={`navbar ${isActive ? 'active' : 'inactive'}`}>
                <ul className='nav-list'>
                
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
                    <button onClick={toggleModal} style={{ background: 'none', border: 'none' }} aria-label="Open profile">
    <img src={profileImage} alt="Profile" style={{ height: '4rem' }} />
</button>
                    </li>
                    <li>
                        <NavLink to="/Account" activeClassName="active">Account</NavLink>
                    </li>
                </ul>
                <Modal isOpen={isModalOpen} onClose={toggleModal}>
                    <h1>Jon Doe</h1>
                    <p>Username: JonD@gmail.com</p>
                    {/* Other modal content */}
                </Modal>
            </nav>
            <button onClick={toggleNavbar} className={`toggle-button ${isActive ? '' : 'collapsed'}`}>
    <img src={isActive ? navIcon : navClosedIcon} alt="Toggle Menu" />
</button>

        </>
    );
}

export default Navbar;


