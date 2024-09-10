import React from 'react';
import './CheckupsDr9.css';

const CheckupsDr9 = () => {
  return (
    <div className="dr9-checkups-section">
      {/* Header Section */}
      <div className="dr9-checkups-header">
        <h2>Most Booked Checkups</h2>
        <p>India's fastest AI-powered & temperature-controlled supply chain to collect and test your blood in the freshest state.</p>
        <button className="dr9-view-checkups-button">View All Checkups</button>
      </div>

      {/* Checkup Boxes */}
      <div className="dr9-checkups-grid">
        <div className="dr9-checkup-box dr9-full-body">
          <span className="dr9-checkup-icon">👥</span>
          <h3>Full Body Checkup</h3>
        </div>

        <div className="dr9-checkup-box dr9-sexual-health">
          <span className="dr9-checkup-icon">💊</span>
          <h3>Sexual Health</h3>
        </div>

        <div className="dr9-checkup-box dr9-allergy-checkup">
          <span className="dr9-checkup-icon">💉</span>
          <h3>Allergy Checkup</h3>
        </div>

        <div className="dr9-checkup-box dr9-fever-checkup">
          <span className="dr9-checkup-icon">🌡️</span>
          <h3>Fever Checkup</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckupsDr9;
