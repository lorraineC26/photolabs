import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { photos, handleClickFav, favPhotos, handleClickOpenModal } = props;

  const photosParsed = photos.map((photo)=> {
    return (
      <PhotoListItem 
        key={photo.id}
        singelPhotoObj={photo}
        photoID={photo.id}
        city={photo.location.city} 
        country={photo.location.country}
        username={photo.user.name}
        photo={photo.urls.regular}
        profilePic={photo.user.profile} 
        handleClickFav={handleClickFav}
        favPhotos={favPhotos}
        handleClickOpenModal={handleClickOpenModal}
      />
    )
  })

  return (
    <ul className="photo-list">

      {photosParsed}

    </ul>
  );
};

export default PhotoList;
