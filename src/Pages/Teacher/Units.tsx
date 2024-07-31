import { useState } from "react";
import Video from "./Video";
import { Topic, TopicsProps } from "../../Types/TopicsTypes";
import AddTopicBtn from "../../Components/AddTopicBtn/AddTopicBtn";
import VideoForm from "../../Components/VideoForm/VideoForm";

const Units = ({ topics }: TopicsProps) => {
  const [currentTopicId, setCurrentTopicId] = useState<number | null>(null);
  const [topicsData, setTopicsData] = useState<Topic[]>(topics);

  const toggleTopicDetails = (id: number) => {
    setCurrentTopicId(currentTopicId === id ? null : id);
  };

  const addVideo = (videoData: any) => {
    // const [currentTopicData] = topicsData.filter(topic => topic.id === currentTopicId);
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i].id === currentTopicId) {
        const newVideo = {
          ...videoData,
          id: updateTopicsData[i].videos.length + 1,
        };
        updateTopicsData[i].videos.push(newVideo);
        break;
      }
    }
    setTopicsData(updateTopicsData);
    // const newVideoId = topics.currentTopicId

    // const newVideo = {
    //   id: videos.length + 1,
    //   name: `Video ${videos.length + 1}`,
    //   title: `Video Title ${videos.length + 1}`,
    //   link: "https://example.com/newvideo",
    // };
    // setVideos([...videos, newVideo]);
  };

  //   const editVideo = (id: number) => {
  //     // Logic to edit video
  //     console.log(`Edit video ${id}`);
  //   };

  //   const deleteVideo = (id: number) => {
  //     console.log(`Delete video ${id}`);
  //     setVideos(videos.filter((video) => video.id !== id));
  //   };

  return (
    <div className="mt-10">
      <div className="flex">
        <AddTopicBtn topicsData={topicsData} setTopicsData={setTopicsData} />
      </div>
      <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
        {topicsData.map((topic, index) => (
          <li key={topic.id} className="border-b py-2 last:border-b-0">
            <div className="flex justify-between items-center">
              <span
                onClick={() => toggleTopicDetails(topic.id)}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Unit {index + 1} : {topic.title}
              </span>
            </div>
            {currentTopicId === topic.id && (
              <div>
                {topic.videos.map((video) => (
                  <Video
                    id={video.id}
                    title={video.title}
                    description={video.description}
                    url={video.url}
                  />
                ))}

                <div className="flex justify-center items-center my-3">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => addVideo(topic.id)}
                  >
                    Add Video
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <VideoForm isEdit={false} action={addVideo} />
    </div>
  );
};

export default Units;
