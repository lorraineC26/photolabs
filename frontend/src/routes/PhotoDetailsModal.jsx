import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { handClickClose, selectedPhoto, favPhotos, handleClickFav} = props;

  const {id, location, similar_photos, urls, user} = selectedPhoto;

  const similarPhotos  = Object.values(similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handClickClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton  
          handleClickFav={handleClickFav} 
          favPhotos={favPhotos}
          photoID={id}
        />

        <img 
          className="photo-details-modal__image" 
          src={urls.full} 
          alt="selected photo" 
        />

        <section className='photo-details-modal__photographer-details'>
          <img 
            className="photo-details-modal__photographer-profile" 
            src={user.profile} 
            alt="user's profile pic" 
          />

          <div className='photo-details-modal__photographer-info'>
            {user.name}
            <div className='photo-details-modal__photographer-location'>
              {location.city}, {location.country}
            </div>
          </div>
        </section>

        <div className='photo-details-modal__header'>Similar Photos</div>
        <PhotoList 
          photos={similarPhotos}
          favPhotos = {favPhotos}
          handleClickFav={handleClickFav}          
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
