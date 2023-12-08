import React from "react";
import './ClientList.css'; // Import the CSS for styling
import icon from './icon.png';

const data = [
  { name: 'John Doe', address: 'Albert road, woodstock', lastSeen: '2023-01-01', directions: './icon.png' },
  { name: 'Jane Smith', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'JJ Odie', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'Jan Boom', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'Koos Kombuis', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'Manowar Chal', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'Goldie Spree', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png'},
  { name: 'Kally Softmore', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'Floors Fisher', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },
  { name: 'Buck Marlsee', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02', directions: './icon.png' },

  // ... other data entries
];

function ClientList() {
  return (
    <div className="grid-container">
      <div className="grid-heading">Name</div>
      <div className="grid-heading">Address</div>
      <div className="grid-heading">Directions</div>
      <div className="grid-heading">Last Seen</div>

      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="grid-item">{item.name}</div>
          <div className="grid-item">{item.address}</div>
          <div className="grid-item">
            <img src={icon} alt="Directions" />
          </div>
          <div className="grid-item">{item.lastSeen}</div>
        </React.Fragment>
      ))}
    </div>
  );
}


export default ClientList;
