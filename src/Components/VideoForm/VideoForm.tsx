import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";
import { VideoType } from "../../Types/TopicsTypes";
import { UserContext } from "../../Context/UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DataVideo {
  _id?: string | null;
  title: string;
  description: string;
  url: string;
}

interface VideoFormProps {
  isEdit: boolean;
  data?: DataVideo;
  updateVideo?: (videoData: VideoType) => void;
  addVideo?: (videoData: VideoType) => void;
}

const VideoForm = ({ isEdit, data, updateVideo, addVideo }: VideoFormProps) => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [vTitle, setVTitle] = React.useState(
    data && data.title ? data.title : ""
  );
  const [vDesc, setVDesc] = React.useState(
    data && data.description ? data.description : ""
  );
  const [vUrl, setVUrl] = React.useState(data && data.url ? data.url : "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const videoData = {
      title: vTitle,
      description: vDesc,
      url: vUrl,
    };

    if (updateVideo) {
      updateVideo(videoData);
    }
    if (addVideo) {
      addVideo(videoData);
    }

    handleClose();
  };

  return (
    <div className="video-form-container">
      {user?.userType == "Teacher" ? (
        <Button onClick={handleOpen} sx={{ color: `${isEdit ? "white" : ""}` }}>
          {isEdit ? "Edit" : "Add a video"}
        </Button>
      ) : (
        <></>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isEdit ? "Edit Video" : "Add A Video"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="space-y-4"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="vTitle"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Video Title
                </label>
                <input
                  type="text"
                  placeholder="Add a Title"
                  name="vTitle"
                  value={vTitle}
                  onChange={(e) => setVTitle(e.target.value)}
                  className="input-field p-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="vDesc"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Video Description
                </label>
                <input
                  type="text"
                  placeholder="Add a Description"
                  name="vDesc"
                  value={vDesc}
                  onChange={(e) => setVDesc(e.target.value)}
                  className="input-field p-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="vUrl"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Video URL
                </label>
                <input
                  type="text"
                  placeholder="Add youtube url"
                  name="vUrl"
                  value={vUrl}
                  onChange={(e) => setVUrl(e.target.value)}
                  className="input-field p-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="btn w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isEdit ? "Save" : "Add A Video"}
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default VideoForm;
