import React, { useState } from 'react';
import './CitySelectionModal.css';
import { FaTimes } from 'react-icons/fa';
import HyderabadIcon from './icons/hyderabad.png'; // Import more PNG files
import BangaloreIcon from './icons/bangalore.png'; // Import PNG files
import MumbaiIcon from './icons/mumbai.png';
import DelhiIcon from './icons/delhi.png'; // Import the Delhi PNG file


function CitySelectionModal({ closeModal }) {
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  const cities = [
    { name: 'Bangalore', icon: <img src={BangaloreIcon} alt="Bangalore Icon" width="40" height="40" /> },
    { name: 'Hyderabad', icon: <img src={HyderabadIcon} alt="Hyderabad Icon" width="40" height="40" /> },
    { name: 'Mumbai', icon: <img src={MumbaiIcon} alt="Mumbai Icon" width="40" height="40" /> },
    { name: 'Delhi', icon: <img src={DelhiIcon} alt="Delhi Icon" width="40" height="40" /> }  // Add Delhi here
  ];
  

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2>Select your city</h2>
        <div className="cities-grid">
          {cities.map(city => (
            <div
              key={city.name}
              className={`city-card ${selectedCity === city.name ? 'selected' : ''}`}
              onClick={() => setSelectedCity(city.name)}
            >
              <span className="city-icon">{city.icon}</span>
              <span className="city-name">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitySelectionModal;
