import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from 'components/TopicListItem';
import topics from "mocks/topics";


const TopicList = () => {

  const topicsParsed = topics.map((topic) => {
    return (
      <TopicListItem 
        key={topic.id} 
        title={topic.title}
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
