import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface VideoFormProps {
  isEdit: boolean;
  data?: {
    title: string;
    description: string;
    url: string;
  };
  action: (videoData: any) => void;
}

const VideoForm = ({ isEdit, data, action }: VideoFormProps) => {
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
    action({
      title: vTitle,
      description: vDesc,
      url: vUrl,
    });
    handleClose();
  };

  return (
    <div className="video-form-container">
      <Button onClick={handleOpen}>
        {isEdit ? "Edit Video" : "Add a video"}
      </Button>
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Video Title</label>
              <input
                type="text"
                placeholder="Add a Title"
                name="vTitle"
                value={vTitle}
                onChange={(e) => setVTitle(e.target.value)}
                className="input-field"
              />
              <label htmlFor="">Video Description</label>
              <input
                type="text"
                placeholder="Add a Description"
                name="vDesc"
                value={vDesc}
                onChange={(e) => setVDesc(e.target.value)}
                className="input-field"
              />
              <label htmlFor="">Video URL</label>
              <input
                type="text"
                placeholder="Add URL"
                name="vUrl"
                value={vUrl}
                onChange={(e) => setVUrl(e.target.value)}
                className="input-field"
              />

              <button type="submit" className="btn">
                Submit Video
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default VideoForm;
