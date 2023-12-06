import React from 'react';
import markerImage1 from './location.png'; // First marker image
import markerImage2 from './check-mark.png'; // Second marker image
import GoogleMapReact from 'google-map-react'; 


const AnyReactComponent = ({ imgSrc, text }) => (
  <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}>
    <img src={imgSrc} alt={text} style={{ height: '30px', width: '30px' }} />
  </div>
);



const Map = () => {
    const clients = [
        { id: 1, lat: -33.9266, lng: 18.4499, img: markerImage1, name: "Jon Doe" },
        { id: 2, lat: -33.9265, lng: 18.4490, img: markerImage2, name: "Jack Burn" },      
        { id: 5, lat: -33.9264, lng: 18.4460, img: markerImage2, name: "Koos Kombuis" },
        { id: 6, lat: -33.9266, lng: 18.4440, img: markerImage2, name: "Manowar Chal" },
        { id: 7, lat: -33.9266, lng: 18.4460, img: markerImage1, name: "Goldie Spree" },
        { id: 8, lat: -33.9266, lng: 18.4455, img: markerImage2, name: "Kally Softmore" },
        { id: 9, lat: -33.9266, lng: 18.4450, img: markerImage1, name: "Floorwis Butch" },
        { id: 10, lat: -33.9266, lng: 18.4444, img: markerImage1, name: "Buck Marlsee" },
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
          bootstrapURLKeys={{ key: 'AIzaSyC-79fRaDPvJgYL9BZrcvFG0AtMQ3uvkwM' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {clients.map(client => (
            <AnyReactComponent
              key={client.id}
              lat={client.lat}
              lng={client.lng}
              imgSrc={client.img}
              text={client.name}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
          }
export default Map;
