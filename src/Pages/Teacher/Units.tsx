import { useContext, useState } from "react";
import Video from "./Video";
import { Topic, TopicsProps, VideoType } from "../../Types/TopicsTypes";
import AddTopicBtn from "../../Components/AddTopicBtn/AddTopicBtn";
import VideoForm from "../../Components/VideoForm/VideoForm";
import AddNewVideoResource from "../../Api/PostNewVideoResource";
import { UserContext } from "../../Context/UserContext";

const Units = ({ topics, classNumber }: TopicsProps) => {
  const { user } = useContext(UserContext);
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);
  const [topicsData, setTopicsData] = useState<Topic[]>(topics);

  const toggleTopicDetails = (id: string) => {
    setCurrentTopicId(currentTopicId === id ? null : id);
  };

  const addVideo = (videoData: VideoType) => {
    console.log(videoData, currentTopicId, classNumber);
    AddNewVideoResource(videoData, currentTopicId, classNumber, user?._id);
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i]._id === currentTopicId) {
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

  const updateVideo = (videoData: VideoType) => {
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i]._id === currentTopicId) {
        const updateVideosArray = updateTopicsData[i].videos.map((video) =>
          video._id === videoData._id ? videoData : video
        );
        updateTopicsData[i].videos = updateVideosArray;
        break;
      }
    }
    setTopicsData(updateTopicsData);
  };

  const deleteVideos = (videoId: string) => {
    const updateTopicsData = [...topicsData];
    for (let i = 0; i < updateTopicsData.length; i++) {
      if (updateTopicsData[i]._id === currentTopicId) {
        const updateVideosArray = updateTopicsData[i].videos.filter(
          (video) => video._id !== videoId
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
        <AddTopicBtn
          classNumber={classNumber}
          topicsData={topicsData}
          setTopicsData={setTopicsData}
        />
      </div>
      <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
        {topicsData.map((topic, index) => (
          <li
            key={index}
            className="border-b py-2 last:border-b-0 hover:bg-blue-100 rounded-md"
          >
            <div key={topic._id} className="flex justify-between items-center">
              <span
                key={topic._id}
                onClick={() => {
                  if (topic._id) toggleTopicDetails(topic._id);
                }}
                className="cursor-pointer text-gray-700  hover:underline"
              >
                Unit {index + 1} : {topic.title}
              </span>
            </div>
            {currentTopicId === topic._id && (
              <div>
                {topic.videos.map((video, index2) => (
                  <div
                    key={index2}
                    className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded"
                  >
                    <Video
                      id={video._id}
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
                          _id: video._id,
                          title: video.title,
                          description: video.description,
                          url: video.url,
                        }}
                        // currentTopicId={currentTopicId}
                      />
                      <button
                        className="px-2 py-1 text-sm text-white bg-red-500 rounded"
                        onClick={() => {
                          if (video._id) deleteVideos(video._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center items-center my-3">
                  <VideoForm
                    isEdit={false}
                    addVideo={addVideo}
                    // currentTopicId={currentTopicId}
                  />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        {/* <button
          className="px-4 py-2 mb-3  bg-green-500 text-white rounded-sm"
          // onClick={() => addTopic()}
        >
          Add Topic
        </button> */}
      </div>
    </div>
  );
};

export default Units;
