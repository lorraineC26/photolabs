import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const {photos, isModalOpen, setModal, selectedPhoto, setSelectedPhoto, favPhotos, setFavPhotos} = props;

  // // track #fav photos in an array
  // const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favPhotos.length}/>
      <PhotoList
        photos={photos} 
        setFavPhotos={setFavPhotos} 
        favPhotos={favPhotos}
        isModalOpen={isModalOpen} 
        setModal={setModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      
    </div>
  );
};

export default HomeRoute;
