import React from 'react';

import './App.scss';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photoItem = <PhotoListItem 
  //       key={sampleDataForPhotoListItem.id}
  //       city={sampleDataForPhotoListItem.location.city} 
  //       country={sampleDataForPhotoListItem.location.country}
  //       username={sampleDataForPhotoListItem.username}
  //       photo={sampleDataForPhotoListItem.imageSource}
  //       profilePic={sampleDataForPhotoListItem.profile} />  

  // const photos = [photoItem, photoItem, photoItem]

  return (
    <div className="App">
      <PhotoList />
    
    </div>
    
  );
};

export default App;
