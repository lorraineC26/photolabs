import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { handClickClose, selectedPhoto, favPhotos, handleClickFav, handleClickOpenModal, photos } = props;

  const {id, location, similar_photos, urls, user} = selectedPhoto;

  // convert the similar_photos obj into an array of obj
  // each obj is a singel photo obj, like the one fetch from api
  const similarPhotos  = Object.values(similar_photos);
  
  // Since there's no similar_photots key in const similarPhotos Array -> extrac the photoID first
  const similarPhotoIDs = similarPhotos.map((simPhotoObj)=>simPhotoObj.id);
  // -> retrive the complete photo objs which come with similar photos from the original db using photoID
  const originalSimPhotos = [];
  for (const photo of photos) {
    if (similarPhotoIDs.includes(photo.id)) {
      originalSimPhotos.push(photo);
    }
  }
  


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
          alt="selected photo larger size" 
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
          photos={originalSimPhotos}
          favPhotos = {favPhotos}
          handleClickFav={handleClickFav}
          handleClickOpenModal={handleClickOpenModal}         
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
