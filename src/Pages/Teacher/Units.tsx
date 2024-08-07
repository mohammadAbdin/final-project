import { useContext, useEffect, useState } from "react";
import Video from "./Video";
import { Topic, TopicsProps, VideoType } from "../../Types/TopicsTypes";
import AddTopicBtn from "../../Components/AddTopicBtn/AddTopicBtn";
import VideoForm from "../../Components/VideoForm/VideoForm";
import AddNewVideoResource from "../../Api/PostNewVideoResource";
import { UserContext } from "../../Context/UserContext";
import deleteVideosRequest from "../../Api/deleteVideosRequest";

const Units = ({ topics, classNumber, setIsLoading }: TopicsProps) => {
  const { user } = useContext(UserContext);
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);
  const [topicsData, setTopicsData] = useState<Topic[]>(topics);

  useEffect(() => {
    setTopicsData(topics);
  }, [topics]);
  const toggleTopicDetails = (id: string) => {
    setCurrentTopicId(currentTopicId === id ? null : id);
  };
  useEffect(() => {
    console.log(topicsData);
  }, [topicsData]);
  const addVideo = (videoData: VideoType) => {
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
    console.log(videoId);
    console.log(currentTopicId);
    deleteVideosRequest(classNumber, user?._id, currentTopicId, videoId);
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
    <div className="mt-10 bg ">
      <div className="flex ">
        <AddTopicBtn
          setIsLoading={setIsLoading}
          classNumber={classNumber}
          topicsData={topicsData}
          setTopicsData={setTopicsData}
        />
      </div>
      <ul className="bg-blue-100  shadow-md rounded-lg p-4 mb-4  ">
        {topicsData.map((topic, index) => (
          <li key={index} className="border-b py-2 last:border-b-0  rounded-md">
            <div key={topic._id} className="flex justify-between items-center ">
              <span
                key={topic._id}
                onClick={() => {
                  if (topic._id) toggleTopicDetails(topic._id);
                }}
                className="cursor-pointer   hover:underline"
              >
                <p className="Indigo-50">
                  Unit {index + 1} : {topic.title}
                </p>
              </span>
            </div>
            {currentTopicId === topic._id && (
              <div>
                {topic.videos.map((video, index2) => (
                  <div
                    key={index2}
                    className="flex justify-between items-end mt-2 p-2 bg-blue-500 rounded-lg  "
                  >
                    <Video
                      id={video._id}
                      title={video.title}
                      description={video.description}
                      url={video.url}
                    />
                    <div className="flex ">
                      <VideoForm
                        isEdit={true}
                        updateVideo={updateVideo}
                        data={{
                          _id: video._id,
                          title: video.title,
                          description: video.description,
                          url: video.url,
                        }}
                      />
                      {user?.userType == "Teacher" ? (
                        <button
                          className="px-2 py-1 text-sm text-gray-900 bg-white rounded"
                          onClick={() => {
                            if (video._id) deleteVideos(video._id);
                          }}
                        >
                          Delete
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex justify-center items-center my-3">
                  <VideoForm isEdit={false} addVideo={addVideo} />
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
