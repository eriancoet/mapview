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
    { id: 1, lat: -33.9079, lng: 18.4098, name: "Jon Doe" }, // Green Point, Cape Town
    { id: 2, lat: -33.9079, lng: 18.7098, name: "Jack Burn" },
    // ... add more clients
  ];

  const defaultProps = {
    center: {
      lat: clients[0].lat, // Set the default center to the lat of Client 1
      lng: clients[0].lng  // Set the default center to the lng of Client 1
    },
    zoom: 11
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
