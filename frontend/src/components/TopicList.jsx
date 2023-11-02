import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from 'components/TopicListItem';
import topics from "mocks/topics";


const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

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
