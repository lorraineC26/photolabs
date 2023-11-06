import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const {photos, handleClickOpenModal, favPhotos, handleClickFav} = props;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favPhotos.length}/>

      <PhotoList
        photos={photos} 
        handleClickFav={handleClickFav} 
        favPhotos={favPhotos}          
        handleClickOpenModal={handleClickOpenModal}
      />
      
    </div>
  );
};

export default HomeRoute;
