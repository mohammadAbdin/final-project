interface VideoType {
  id: number;
  title: string;
  description: string;
  url: string;
}

const Video: React.FC<VideoType> = ({ id, title, description, url }) => {
  const editVideo = (id: number) => {
    // Logic to edit video
    console.log(`Edit video ${id}`);
  };

  const deleteVideo = (id: number) => {
    //   console.log(`Delete video ${id}`);
    //   setVideos(videos.filter((video) => id !== id));
  };
  console.log(id);

  return (
    <div
      key={id}
      className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded"
    >
      <div>
        <p className="font-semibold">{title}</p>

        <div className="w-1/2 aspect-square">
          <iframe
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
      <p>{description}</p>
      <div>
        <button
          className="px-2 py-1 text-sm text-white bg-purple-500 rounded mr-2 mb-2"
          onClick={() => editVideo(id)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 text-sm text-white bg-red-500 rounded"
          onClick={() => deleteVideo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Video;
