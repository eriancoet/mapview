import React from 'react';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '10px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const Map = () => {
    const clients = [
      { id: 1, lat: -33.9266, lng: 18.4499, name: "Jon Doe" }, // Woodstock, Cape Town
      { id: 2, lat: -33.9266, lng: 18.4490, name: "Jack Burn" },
      // ... add more clients
    ];
  
    const defaultProps = {
      center: {
        lat: clients[0].lat,
        lng: clients[0].lng
      },
      zoom: 18 // Adjusted zoom level for closer view
    };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC-79fRaDPvJgYL9BZrcvFG0AtMQ3uvkwM' }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {clients.map(client => (
          <AnyReactComponent
            key={client.id}
            lat={client.lat}
            lng={client.lng}
            text={client.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
