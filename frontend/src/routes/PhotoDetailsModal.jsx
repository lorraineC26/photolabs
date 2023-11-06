import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {isModalOpen, setModal} = props;
  const handClickModalClose = () => {
    setModal(false);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handClickModalClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
