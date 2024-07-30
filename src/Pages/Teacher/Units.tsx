import { useState } from "react";
import Video from "./Video";
import { TopicsProps } from "../../Types/TopicsTypes";

// interface Topic {
//   id: number;
//   title: string;
//   videos: Video[];
// }

// interface Video {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
// }

// type TopicsProps = {
//   topics: Topic[];
// };

const Units = ({ topics }: TopicsProps) => {
  // const [topics, setTopics] = useState<Topic[]>(fetchTopics);
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

  const addVideo = () => {
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
        <button
          className="px-4 py-2 mb-3  bg-green-500 text-white rounded"
          onClick={addTopic}
        >
          Add Topic
        </button>
      </div>
      <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
        {topics.map((topic, index) => (
          <li key={topic.id} className="border-b py-2 last:border-b-0">
            <div className="flex justify-between items-center">
              <span
                onClick={() => toggleVideoDetails(topic.id)}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Unit {index + 1} : {topic.title}
              </span>
              {/* <div>
                <button
                  className="px-2 py-1 text-sm text-white bg-blue-500 rounded mr-2"
                  onClick={() => editTopic(topic.id)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 text-sm text-white bg-red-500 rounded"
                  onClick={() => deleteTopic(topic.id)}
                >
                  Delete
                </button>
              </div> */}
            </div>
            {expandedTopicId === topic.id && (
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
                    onClick={addVideo}
                  >
                    Add Video
                  </button>
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
