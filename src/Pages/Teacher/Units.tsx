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
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i].id === currentTopicId) {
        const newVideo = {
          ...videoData,
          id: updateTopicsData[i].videos.length + 1,
          url: `https://www.youtube.com/embed/${videoData.url}`,
        };
        updateTopicsData[i].videos.push(newVideo);
        break;
      }
    }
    setTopicsData(updateTopicsData);
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
                  <div className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded">
                    <Video
                      id={video.id}
                      title={video.title}
                      description={video.description}
                      url={video.url}
                    />
                    <div className="flex">
                      <VideoForm isEdit={true} action={addVideo} />
                      <button
                        className="px-2 py-1 text-sm text-white bg-red-500 rounded"
                        // onClick={() => deleteVideo(id)}
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
                  <VideoForm isEdit={false} action={addVideo} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Units;
