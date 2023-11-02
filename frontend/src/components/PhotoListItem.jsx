import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { city, country, username, photo, profilePic } = props;



  return (
    <div className="photo-list__item">

      <PhotoFavButton />

      <img 
        src={photo} 
        alt="photo" 
        className="photo-list__image" 
      />
      
      <section className="photo-list__user-details">
        <img 
          src={profilePic} 
          alt="user's profile pic" 
          className="photo-list__user-profile" 
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
