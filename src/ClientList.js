import React from "react";
import './ClientList.css'; // Import the CSS for styling

const data = [
  { name: 'John Doe', address: 'Albert road, woodstock', hits: 3, lastSeen: '2023-01-01' },
  { name: 'Jane Smith', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'JJ Odie', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Jan Boom', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Koos Kombuis', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Manowar Chal', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Goldie Spree', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Kally Softmore', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Floors Fisher', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },
  { name: 'Buck Marlsee', address: "Albert road, woodstock", hits: 2, lastSeen: '2023-01-02' },

  // ... other data entries
];

function ClientList() {
  return (
    <div className="grid-container">
      <div className="grid-heading">Name</div>
      <div className="grid-heading">Address</div>
      <div className="grid-heading">Hits</div>
      <div className="grid-heading">Last Seen</div>

      {data.map((item, index) => (
        <>
          <div key={`name-${index}`} className="grid-item">{item.name}</div>
          <div key={`attempts-${index}`} className="grid-item">{item.address}</div>
          <div key={`hits-${index}`} className="grid-item">{item.hits}</div>
          <div key={`lastseen-${index}`} className="grid-item">{item.lastSeen}</div>
        </>
      ))}
    </div>
  );
}

export default ClientList;
