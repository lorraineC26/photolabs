import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {handleClickFav, photoID, favPhotos} = props;

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClickFav(photoID)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favPhotos.includes(photoID)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;