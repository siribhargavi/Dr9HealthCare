import React, { useState } from 'react';
import axios from 'axios';
import './CitySelectionModal.css'; // Import the CSS file

const GeocodeAddress = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          reverseGeocode(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError('Unable to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const reverseGeocode = (lat, lon) => {
    const apiKey = 'AIzaSyA3aRzTQ9mudTlhR_hcv-hZLB4XkwwWQIM'; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;

    axios.get(url)
      .then((response) => {
        if (response.data.results.length > 0) {
          setAddress(response.data.results[0].formatted_address);
          setError('');
        } else {
          setError('Unable to fetch address.');
        }
      })
      .catch(() => {
        setError('Error in fetching address.');
      });
  };

  return (
    <div className="geocode-container">
      <button className="geocode-button" onClick={handleGetLocation}>Get Current Location</button>
      {latitude && longitude && (
        <div className="geocode-info">
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
      {address && <p className="geocode-info">Address: {address}</p>}
      {error && <p className="geocode-info">Error: {error}</p>}
    </div>
  );
};

export default GeocodeAddress;
