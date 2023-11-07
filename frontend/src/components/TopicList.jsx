import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from 'components/TopicListItem';

const TopicList = (props) => {
  const { topics, getPhotosByTopics } = props;

  const topicsParsed = topics.map((topic) => {
    return (
      <TopicListItem 
        key={topic.id}
        topicID={topic.id} 
        title={topic.title}
        getPhotosByTopics={getPhotosByTopics}
      />
    )
  }); 

  return (
    <div className="top-nav-bar__topic-list">
      {topicsParsed}
    </div>
  );
};

export default TopicList;
