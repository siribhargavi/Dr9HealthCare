import React, { useState } from 'react';
import Header from './Header/Header'; // Adjust the path based on your folder structure
import CitySelectionModal from './Header/CitySelectionModal';// Import the modal component

function App() {
  const [isModalOpen, setModalOpen] = useState(false); // State for opening/closing modal

  return (
    <div>
      <Header openCityModal={() => setModalOpen(true)} /> {/* Pass function to open modal */}
      {isModalOpen && <CitySelectionModal closeModal={() => setModalOpen(false)} />} {/* Modal */}
      {/* Other components like HeroBanner, TestSearch, etc. */}
    </div>
  );
}

export default App;
