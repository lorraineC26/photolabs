import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute 
        isModalOpen={isModalOpen} 
        setModal={setModal}
      />

      {isModalOpen && 
        <PhotoDetailsModal 
          isModalOpen={isModalOpen}
          setModal={setModal}
        />
      }
 
    </div>
    
  );
};

export default App;
