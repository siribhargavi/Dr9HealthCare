import React, { useState } from 'react';

import Header from './Header/Header'; // Adjust the path based on your folder structure
import CitySelectionModal from './Header/CitySelectionModal';// Import the modal component
import Banner from './Banner/Banner';
import InHouseLabs from './Banner/InHouseLabs';
import Checkups from './Checkups/Checkups';


function App() {
  const [isModalOpen, setModalOpen] = useState(false); // State for opening/closing modal

  return (
    <div className="app-wrapper">
            <div className="content-wrapper">

      <Header openCityModal={() => setModalOpen(true)} /> {/* Pass function to open modal */}
      {isModalOpen && <CitySelectionModal closeModal={() => setModalOpen(false)} />} {/* Modal */}
      {/* Other components like HeroBanner, TestSearch, etc. */}
      <Banner/>
      <InHouseLabs />
      <Checkups />

</div>
    </div>
  );
}

export default App;
