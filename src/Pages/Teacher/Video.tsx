interface VideoType {
  id: string | undefined;
  title: string;
  description: string;
  url: string;
}

function extractVideoId(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const Video: React.FC<VideoType> = ({ id, title, description, url }) => {
  const videoId = extractVideoId(url);

  return (
    <div
      key={id}
      className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded"
    >
      <div>
        <p className="font-semibold">{title}</p>

        <div className="w-1/2 aspect-square">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
      <p>{description}</p>
      <div></div>
    </div>
  );
};

export default Video;
