import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {handleClickFav, favStatus} = props;
  // const [fav, setFav] = useState(false);
  
  // const onClickFav = () => {
  //   setFav(!fav);
  // }

  return (
    <div className="photo-list__fav-icon" onClick={handleClickFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favStatus}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;