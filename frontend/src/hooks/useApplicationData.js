import { useReducer } from "react"
import { useState } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       return { /* insert logic */ }
//     { /* insert all relevant actions as case statements*/ }  
//     }

//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const initialState = {
//   isModalOpen: false,
//   selectedPhoto: null,
//   favPhotos: [],
//   photo:[],
//   topics:[]
// }


const useApplicationData = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [isModalOpen, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);

  const state = {isModalOpen, selectedPhoto, favPhotos};

  // close Modal
  const handClickClose = () => {
    setModal(false);
    setSelectedPhoto(null);
  }

  // open Modal
  const handleClickOpenModal = (photoProps) => {
    setModal(true);
    setSelectedPhoto(photoProps);
  }

  // toggle fav
  const handleClickFav = (photoID) => {
    // when the photo is not fav yet
    if (! favPhotos.includes(photoID)) {
        setFavPhotos((prev) => [...prev, photoID]);
      } else {
        // when the photo has already been marked as fav --> remove it from the fav list
        setFavPhotos(favPhotos.filter(favPhotosID => favPhotosID !== photoID));
    }
  }

  return {
    state,
    handleClickFav,
    handClickClose,
    handleClickOpenModal
  }
}

export default useApplicationData;