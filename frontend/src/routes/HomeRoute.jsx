import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {

  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favPhotos.length}/>
      <PhotoList 
        setFavPhotos={setFavPhotos} 
        favPhotos={favPhotos}
      />
    </div>
  );
};

export default HomeRoute;
