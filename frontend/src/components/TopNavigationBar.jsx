import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">

      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      {/* need  to pass a fx to the FavBadge to red the heart*/}
      <FavBadge isFavPhotoExist /> 

    </div>
  )
}

export default TopNavigation;