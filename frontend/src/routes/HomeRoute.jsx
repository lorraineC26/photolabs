import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const {isModalOpen, setModal} = props;

  // track #fav photos in an array
  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favPhotos.length}/>
      <PhotoList 
        setFavPhotos={setFavPhotos} 
        favPhotos={favPhotos}
        isModalOpen={isModalOpen} 
        setModal={setModal}
      />
      
    </div>
  );
};

export default HomeRoute;
