import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css';
import houseIcon from './home.png'; // Ensure this is the correct path to your house icon
import fileIcon from './document.png'; // Ensure this is the correct path to your file icon

const data = [
    {
        name: 'John Doe',
        address: 'Albert road, woodstock',
        lastSeen: '2023-01-01',
        email: 'john.doe@example.com',
        directions: 'https://www.google.com/maps'
    },
    {
        name: 'Jane Smith',
        address: 'Baker street, woodstock',
        lastSeen: '2023-01-02',
        email: 'jane.smith@example.com',
        directions: 'https://www.google.com/maps'
    },
    {
      name: 'JJ Odie',
      address: 'Baker street, woodstock',
      lastSeen: '2023-01-02',
      email: 'jane.smith@example.com',
      directions: 'https://www.google.com/maps'
  },   {
    name: 'Jan Boom',
    address: 'Baker street, woodstock',
    lastSeen: '2023-01-02',
    email: 'jane.smith@example.com',
    directions: 'https://www.google.com/maps'
},   {
  name: 'Koos Smith',
  address: 'Baker street, woodstock',
  lastSeen: '2023-01-02',
  email: 'jane.smith@example.com',
  directions: 'https://www.google.com/maps'
},   {
  name: 'Manowar Cgar',
  address: 'Baker street, woodstock',
  lastSeen: '2023-01-02',
  email: 'jane.smith@example.com',
  directions: 'https://www.google.com/maps'
},
];

function Contacts() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openGoogleMaps = (directions) => {
        window.open(directions, '_blank');
    };

    return (
        <div>
            <button onClick={toggleMenu} className="hamburger-menu">
                ☰ {/* Hamburger Icon */}
            </button>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                {/* Add other navigation links as needed */}
            </div>

            <div className="grid-container">
                <div className="grid-heading">Name</div>
                <div className="grid-heading">Map</div>
                <div className="grid-heading">Lists</div>
                <div className="grid-heading">Address</div>
                <div className="grid-heading">Email</div>

                {data.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="grid-item">{item.name}</div>
                        <div className="grid-item">
                            <img src={houseIcon} alt="Map" onClick={() => openGoogleMaps(item.directions)} />
                        </div>
                        <div className="grid-item">
                            <img src={fileIcon} alt="Lists" />
                        </div>
                        <div className="grid-item">{item.address}</div>
                        <div className="grid-item">{item.email}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Contacts;
