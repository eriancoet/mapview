import React from "react";
import './ClientList.css'; // Import the CSS for styling

const data = [
  { name: 'John Doe', attempts: 5, hits: 3, lastSeen: '2023-01-01' },
  { name: 'Jane Smith', attempts: 4, hits: 2, lastSeen: '2023-01-02' },
  // ... other data entries
];

function ClientList() {
  return (
    <div className="grid-container">
      <div className="grid-heading">Name</div>
      <div className="grid-heading">Attempts</div>
      <div className="grid-heading">Hits</div>
      <div className="grid-heading">Last Seen</div>

      {data.map((item, index) => (
        <>
          <div key={`name-${index}`} className="grid-item">{item.name}</div>
          <div key={`attempts-${index}`} className="grid-item">{item.attempts}</div>
          <div key={`hits-${index}`} className="grid-item">{item.hits}</div>
          <div key={`lastseen-${index}`} className="grid-item">{item.lastSeen}</div>
        </>
      ))}
    </div>
  );
}

export default ClientList;
