import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaCartPlus, FaFlask, FaHeart, FaWhatsapp,FaCaretDown } from 'react-icons/fa'; // Import FaWhatsapp
import CitySelectionModal from './CitySelectionModal'; // Import the modal
import './Header.css';

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-left">
            <img src={"/images/logo.jpg"} alt="Dr.9 Health Care Center Logo" className="logo" />
            <div className="location" onClick={openModal}>
              <FaMapMarkerAlt className="location-icon" />
              <span className="location-label">My Location: Hyderabad</span>
              <FaCaretDown className="dropdown-icon" />
            </div>
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
