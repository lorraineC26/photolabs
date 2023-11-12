import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state,
      handleClickFav,
      handClickClose,
      handleClickOpenModal,
      getPhotosByTopics,
    } = useApplicationData();
  
  const { isModalOpen, selectedPhoto, favPhotos, photos, topics } = state;

  return (
    <div className="App">

      <HomeRoute 
        photos={photos}
        topics={topics}
        handleClickOpenModal={handleClickOpenModal}
        favPhotos={favPhotos}
        handleClickFav={handleClickFav}
        getPhotosByTopics={getPhotosByTopics}
      />

      {isModalOpen && 
        <PhotoDetailsModal 
          handClickClose={handClickClose}
          selectedPhoto={selectedPhoto}
          favPhotos={favPhotos}
          handleClickFav={handleClickFav}
          handleClickOpenModal={handleClickOpenModal}
          photos={photos}
        />
      }
 
    </div>
    
  );
};

export default App;
