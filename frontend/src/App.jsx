import React, { useState } from 'react';

import './App.scss';
import photos from "mocks/photos";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
   // track #fav photos in an array
  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        isModalOpen={isModalOpen} 
        setModal={setModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
      />

      {isModalOpen && 
        <PhotoDetailsModal 
          setModal={setModal}
          selectedPhoto={selectedPhoto}
          favPhotos={favPhotos}
        />
      }
 
    </div>
    
  );
};

export default App;
