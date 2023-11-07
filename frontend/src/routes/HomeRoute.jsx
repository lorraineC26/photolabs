import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const { photos, topics, handleClickOpenModal, favPhotos, handleClickFav, getPhotosByTopics } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        isFavPhotoExist={favPhotos.length}
        topics={topics}
        getPhotosByTopics={getPhotosByTopics}
      />

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
