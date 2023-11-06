import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="App">
      <HomeRoute 
        isModalOpen={isModalOpen} 
        setModal={setModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />

      {isModalOpen && 
        <PhotoDetailsModal 
          setModal={setModal}
          selectedPhoto={selectedPhoto}
        />
      }
 
    </div>
    
  );
};

export default App;
