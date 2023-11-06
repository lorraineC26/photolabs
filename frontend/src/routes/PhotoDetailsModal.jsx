import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setModal, selectedPhoto } = props;

  const handClickClose = () => {
    setModal(false);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handClickClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
