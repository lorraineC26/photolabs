import React from "react";
import { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { photoID, city, country, username, photo, photoFull, profilePic, setFavPhotos, favPhotos, isModalOpen, setModal, setSelectedPhoto} = props;

  // const [favStatus, setFav] = useState(false);
  // const handleClickFav = (photoID) => {
  //   setFav((prev) => {return !prev});

  //   // modify favPhotos array when toggling heart
  //   const toggleFavPhotos = (photoID) => {
  //     // when the photo is not fav yet
  //     if (! favPhotos.includes(photoID)) {
  //       setFavPhotos([...favPhotos, photoID]);
  //     // when the photo has already been marked as fav --> remove it from the fav list
  //     } else {
  //       setFavPhotos(favPhotos.filter(favPhotosID => favPhotosID !== photoID));
  //     }
  //   }

  //   toggleFavPhotos(photoID)
  // }

  const handleClickFav = (photoID) => {
    // when the photo is not fav yet
    if (! favPhotos.includes(photoID)) {
        setFavPhotos([...favPhotos, photoID]);
      } else {
        // when the photo has already been marked as fav --> remove it from the fav list
        setFavPhotos(favPhotos.filter(favPhotosID => favPhotosID !== photoID));
    }
  }

  // side peek click handler
  const handleClickOpenModal = () => {
    setModal(!isModalOpen)

    setSelectedPhoto({photoID, photoFull, profilePic, username, city, country, handleClickFav})
  }

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
        onClick={handleClickOpenModal}
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
