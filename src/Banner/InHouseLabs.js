import React from 'react';
import './InHouseLabs.css';

const InHouseLabs = () => {
  return (
    <div className="background-wrapper">
      <div className="floating-icon icon-1"></div>
      <div className="floating-icon icon-2"></div>
      <div className="floating-icon icon-3"></div>

      <div className="in-house-labs-section">
        <div className="small-box">
          <span className="icon"><i className="fas fa-award"></i></span>
          <span className="text">In-house labs</span>
          <span className="subtext">NABL certified</span>
        </div>

        <div className="small-box">
          <span className="icon"><i className="fas fa-stopwatch"></i></span>
          <span className="text">60 mins collection</span>
          <span className="subtext">6 AM - 10 PM</span>
        </div>

        <div className="small-box">
          <span className="icon"><i className="fas fa-clock"></i></span>
          <span className="text">Reports in</span>
          <span className="subtext">6 hours</span>
        </div>

        {/* New Features */}
        <div className="small-box">
          <span className="icon"><i className="fas fa-user-md"></i></span>
          <span className="text">Experienced Doctors</span>
          <span className="subtext">Top specialists</span>
        </div>

        <div className="small-box">
          <span className="icon"><i className="fas fa-microscope"></i></span>
          <span className="text">Advanced Technology</span>
          <span className="subtext">State-of-the-art equipment</span>
        </div>

        <div className="small-box">
          <span className="icon"><i className="fas fa-heart"></i></span>
          <span className="text">Personalized Care</span>
          <span className="subtext">We care for you</span>
        </div>

        <div className="small-box">
          <span className="icon"><i className="fas fa-wallet"></i></span>
          <span className="text">Affordable Pricing</span>
          <span className="subtext">Transparent costs</span>
        </div>
      </div>
    </div>
  );
};

export default InHouseLabs;
