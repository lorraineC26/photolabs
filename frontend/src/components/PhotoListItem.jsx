import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { photoID, 
          singelPhotoObj, 
          city, 
          country, 
          username, 
          photo, 
          profilePic, 
          handleClickFav, 
          favPhotos, 
          handleClickOpenModal, 
        } = props;


  return (
    <div className="photo-list__item" >

      <PhotoFavButton  
        handleClickFav={handleClickFav} 
        favPhotos={favPhotos}
        photoID={photoID}
      />

      <img 
        className="photo-list__image" 
        src={photo} 
        alt="photo" 
        onClick={() => handleClickOpenModal(singelPhotoObj)}
      />
      
      <section className="photo-list__user-details">
        <img 
          className="photo-list__user-profile" 
          src={profilePic} 
          alt="user's profile pic" 
        />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">
            {city}, {country}
          </div>
        </div>
      </section>
      
    </div>
  )
};

export default PhotoListItem;
