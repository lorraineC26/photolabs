import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {handleClickFav, photoID, favPhotos} = props;
  // const [fav, setFav] = useState(false);
  
  // const onClickFav = () => {
  //   setFav(!fav);
  // }

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClickFav(photoID)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favPhotos.includes(photoID)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;