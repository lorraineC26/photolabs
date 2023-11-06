import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { setModal, selectedPhoto, favPhotos} = props;
  const { photoID, photoFull, profilePic, username, city, country, eachPhoto, handleClickFav } = selectedPhoto;

  const handClickClose = () => {
    setModal(false);
  };

  const similarPhotos  = Object.values(eachPhoto.similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handClickClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton  
          handleClickFav={handleClickFav} 
          favPhotos={favPhotos}
          photoID={photoID}
        />

        <img 
          className="photo-details-modal__image" 
          src={photoFull} 
          alt="selected photo" 
        />

        <section className='photo-details-modal__photographer-details'>
          <img 
            className="photo-details-modal__photographer-profile" 
            src={profilePic} 
            alt="user's profile pic" 
          />

          <div className='photo-details-modal__photographer-info'>
            {username}
            <div className='photo-details-modal__photographer-location'>
              {city}, {country}
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
