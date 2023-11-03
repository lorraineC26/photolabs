import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = (props) => {
  const {setFavPhotos, favPhotos} = props;

  const photosParsed = photos.map((photo)=> {
    return (
      <PhotoListItem 
        key={photo.id}
        photoID={photo.id}
        city={photo.location.city} 
        country={photo.location.country}
        username={photo.user.name}
        photo={photo.urls.regular}
        profilePic={photo.user.profile} 
        setFavPhotos={setFavPhotos}
        favPhotos={favPhotos}
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
