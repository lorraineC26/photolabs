import { useReducer, useEffect } from "react"
import axios from "axios";

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
        // re-assign to update the value of selectedPhoto; 
        // the enteir single photo obj passed as photoProps in PhotoListItem.js
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
      };
    
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload
      };
    
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload
      };
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favPhotos: [],
  photos:[], //photoData on Compass
  topics:[] //topicData on Compass
}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('/api/photos')
      // extract an array of obj; each obj contain: id, user, urls, location, similar_photos 
      .then(res => res.data)
      .then(data => {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
      }) 
  }, []);

  useEffect(() => {
    axios.get('/api/topics')
      .then(res => res.data)
      .then(data => {
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data})
      }) 
  }, []);



  // close Modal
  const handClickClose = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  // open Modal
  const handleClickOpenModal = (photoProps) => {
    dispatch({type: ACTIONS.OPEN_MODAL, photoProps});
  }

  // toggle fav
  const handleClickFav = (photoID) => {
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