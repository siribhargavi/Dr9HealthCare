import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaCartPlus, FaFlask, FaHeart, FaWhatsapp, FaCaretDown, FaSearch } from 'react-icons/fa';
import CitySelectionModal from './CitySelectionModal'; // Import the modal
import './Header.css';

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [searchTerm, setSearchTerm] = useState('');
  const [textCycle, setTextCycle] = useState(0);

  const searchTexts = [
    'Search for Thyroid Test',
    'Search for COVID-19 Test',
    'Search for Diabetes Checkup',
    'Search for Full Body Checkup',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCycle((prev) => (prev + 1) % searchTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [searchTexts.length]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-left">
            <img src={"/images/logo.jpg"} alt="Dr.9 Health Care Center Logo" className="logo" />
            <div className="location" onClick={openModal}>
              <FaMapMarkerAlt className="location-icon" />
              <span className="location-label">Hyderabad</span>
              <FaCaretDown className="dropdown-icon" />
            </div>
          </div>
          
          {/* Search Bar with Cycling Text */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder={searchTexts[textCycle]}
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <nav className="header-right">
            <ul className="nav-list">
              <li className="nav-item"><a href="#tests"><FaFlask className="nav-icon" /> Tests</a></li>
              <li className="nav-item"><a href="#checkups"><FaHeart className="nav-icon" /> Checkups</a></li>
            </ul>
            <div className="header-buttons">
              <button className="support-btn">
                <FaWhatsapp className="icon" /> Support
              </button>
              <button className="cart-btn"><FaCartPlus className="icon" /> Cart</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Modal for City Selection */}
      {isModalOpen && <CitySelectionModal closeModal={closeModal} />}
    </>
  );
}

export default Header;
