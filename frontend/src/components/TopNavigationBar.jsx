import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { isFavPhotoExist, topics, getPhotosByTopics } = props;

  return (
    <div className="top-nav-bar">

      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics={topics}
        getPhotosByTopics={getPhotosByTopics} 
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> 

    </div>
  )
}

export default TopNavigation;