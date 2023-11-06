import { useReducer } from "react"
import { useState } from "react";

export const ACTIONS = {
  TOGGLE_FAV: 'TOGGLE_FAV',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CLOSE_MODAL:
      return { 
        ...state,
        isModalOpen: false,
        selectedPhoto: null
      };
    
    case ACTIONS.OPEN_MODAL: 
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.photoProps
      };
    
    case ACTIONS.TOGGLE_FAV:
      const {photoID} = action.payload;
      const isFav = state.favPhotos.includes(photoID);
      // when the photo is not fav yet
      if(!isFav) {
        return {
          ...state,
          favPhotos:[...state.favPhotos, photoID]
        }
      } else {
        // when the photo has already been marked as fav --> remove it from the fav list
        return {
          ...state,
          favPhotos: state.favPhotos.filter(favPhotosID => favPhotosID !== photoID)
        }
      }
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favPhotos: []

}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [isModalOpen, setModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [favPhotos, setFavPhotos] = useState([]);

  // const state = {isModalOpen, selectedPhoto, favPhotos};

  // close Modal
  const handClickClose = () => {
    // setModal(false);
    // setSelectedPhoto(null);
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  // open Modal
  const handleClickOpenModal = (photoProps) => {
    // setModal(true);
    // setSelectedPhoto(photoProps);
    dispatch({type: ACTIONS.OPEN_MODAL, photoProps});
  }

  // toggle fav
  const handleClickFav = (photoID) => {
    // // when the photo is not fav yet
    // if (! favPhotos.includes(photoID)) {
    //     setFavPhotos((prev) => [...prev, photoID]);
    //   } else {
    //     // when the photo has already been marked as fav --> remove it from the fav list
    //     setFavPhotos(favPhotos.filter(favPhotosID => favPhotosID !== photoID));
    // }
    dispatch({type: ACTIONS.TOGGLE_FAV, payload: {photoID}});
  }

  return {
    state,
    handleClickFav,
    handClickClose,
    handleClickOpenModal
  }
}

export default useApplicationData;