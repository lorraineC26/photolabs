import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const {photos, setFavPhotos, favPhotos, isModalOpen, setModal, selectedPhoto, setSelectedPhoto } = props;

  const photosParsed = photos.map((photo)=> {
    return (
      <PhotoListItem 
        key={photo.id}
        eachPhoto={photo}
        photoID={photo.id}
        city={photo.location.city} 
        country={photo.location.country}
        username={photo.user.name}
        photo={photo.urls.regular}
        photoFull={photo.urls.full}
        profilePic={photo.user.profile} 
        setFavPhotos={setFavPhotos}
        favPhotos={favPhotos}
        isModalOpen={isModalOpen} 
        setModal={setModal}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
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
