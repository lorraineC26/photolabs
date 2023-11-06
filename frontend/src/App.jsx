import React, { useState } from 'react';

import './App.scss';
import photos from "mocks/photos";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';




// Note: Rendering a single component to build components in isolation
const App = () => {
  // const [isModalOpen, setModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  //  // track #fav photos in an array
  // const [favPhotos, setFavPhotos] = useState([]);

  const { state,
    handleClickFav,
    handClickClose,
    handleClickOpenModal } = useApplicationData();
  
  const {isModalOpen, selectedPhoto, favPhotos} = state;

  return (
    <div className="App">

      <HomeRoute 
        photos={photos}
        handleClickOpenModal={handleClickOpenModal}
        favPhotos={favPhotos}
        handleClickFav={handleClickFav}
      />

      {isModalOpen && 
        <PhotoDetailsModal 
          handClickClose={handClickClose}
          selectedPhoto={selectedPhoto}
          favPhotos={favPhotos}
          handleClickFav={handleClickFav}
        />
      }
 
    </div>
    
  );
};

export default App;
