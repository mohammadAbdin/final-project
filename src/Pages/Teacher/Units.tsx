import { useState } from "react";
import Video from "./Video";
import { Topic, TopicsProps } from "../../Types/TopicsTypes";
import AddTopicBtn from "../../Components/AddTopicBtn/AddTopicBtn";
import VideoForm from "../../Components/VideoForm/VideoForm";

interface DataVideo {
  title: string;
  description: string;
  url: string;
}

// interface DataVideoForUpdate {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
// }

const Units = ({ topics }: TopicsProps) => {
  const [currentTopicId, setCurrentTopicId] = useState<number | null>(null);
  const [topicsData, setTopicsData] = useState<Topic[]>(topics);

  const toggleTopicDetails = (id: number) => {
    setCurrentTopicId(currentTopicId === id ? null : id);
  };

  const addVideo = (videoData: any) => {
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
  };

  const updateVideo = (videoData: any) => {
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i].id === currentTopicId) {
        const updateVideosArray = updateTopicsData[i].videos.map((video) =>
          video.id === videoData.id ? videoData : video
        );
        updateTopicsData[i].videos = updateVideosArray;
        break;
      }
    }
    setTopicsData(updateTopicsData);
  };

  const deleteVideos = (videoId: any) => {
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i].id === currentTopicId) {
        const updateVideosArray = updateTopicsData[i].videos.filter(
          (video) => video.id !== videoId
        );
        updateTopicsData[i].videos = updateVideosArray;
        break;
      }
    }
    setTopicsData(updateTopicsData);
  };

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
                  <div className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded">
                    <Video
                      id={video.id}
                      title={video.title}
                      description={video.description}
                      url={video.url}
                    />
                    <div className="flex">
                      <VideoForm
                        isEdit={true}
                        updateVideo={updateVideo}
                        // action={(id: number = video.id, data: DataVideo) =>
                        //   updateVideo(id, data)
                        // }
                        data={{
                          id: video.id,
                          title: video.title,
                          description: video.description,
                          url: video.url,
                        }}
                      />
                      <button
                        className="px-2 py-1 text-sm text-white bg-red-500 rounded"
                        onClick={() => deleteVideos(video.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center items-center my-3">
                  {/* <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => addVideo(topic.id)}
                  >
                    Add Video
                  </button> */}
                  <VideoForm isEdit={false} addVideo={addVideo} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        {/* <button
          className="px-4 py-2 mb-3  bg-green-500 text-white rounded-sm"
          onClick={addTopic}
        >
          Add Topic
        </button> */}
      </div>
    </div>
  );
};

export default Units;
