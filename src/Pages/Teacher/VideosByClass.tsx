import React, { useState } from "react";

interface Topic {
  id: number;
  title: string;
  videos: Video1[];
}

interface Video1 {
  id: number;
  title: string;
  description: string;
  url: string;
}

const fetchTopics: Topic[] = [
  {
    id: 1,
    title: "Duplicate",
    videos: [
      {
        id: 1,
        title: "video1",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 2,
        title: "video2",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 3,
        title: "video3",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
    ],
  },
  {
    id: 2,
    title: "Divided",
    videos: [
      {
        id: 1,
        title: "video1",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 2,
        title: "video2",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 3,
        title: "video3",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
    ],
  },
];

const VideosByClass: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>(fetchTopics);
  const [expandedTopicId, setExpandedTopicId] = useState<number | null>(null);

  const addTopic = () => {
    //  const newVideo = {
    //    id: videos.length + 1,
    //    name: `Video ${videos.length + 1}`,
    //    title: `Video Title ${videos.length + 1}`,
    //    link: "https://example.com/newvideo",
    //  };
    //  setVideos([...videos, newVideo]);
  };

  const editTopic = (id: number) => {
    // Logic to edit video
    console.log(`Edit Topic ${id}`);
  };

  const deleteTopic = (id: number) => {
    console.log(`Delete Topic ${id}`);
    // setVideos(videos.filter((video) => video.id !== id));
  };

  const toggleVideoDetails = (id: number) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  //   const editVideo = (id: number) => {
  //     // Logic to edit video
  //     console.log(`Edit video ${id}`);
  //   };

  //   const deleteVideo = (id: number) => {
  //     console.log(`Delete video ${id}`);
  //     setVideos(videos.filter((video) => video.id !== id));
  //   };

  return <div>VideosByClass</div>;
};

export default VideosByClass;
