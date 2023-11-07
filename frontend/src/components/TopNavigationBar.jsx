import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { isFavPhotoExist, topics } = props;

  return (
    <div className="top-nav-bar">

      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> 

    </div>
  )
}

export default TopNavigation;