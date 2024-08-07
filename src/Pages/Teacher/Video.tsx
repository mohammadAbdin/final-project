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
      className="flex    h-64 "
    >
     

        <div className="w-11/12 h-96 ">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-2/3 "
          />
        </div>
         <div className=" ml-6 text-gray-100  h-20" >
        <p className="font-semibold text-xl">{title}</p>
     
      <p>{description}</p>
       </div>
    </div>
  );
};

export default Video;
