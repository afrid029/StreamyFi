import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useDashboardContext } from "../Pages/Dashboard";
import Wrapper from "../assets/Wrapper/Player";
import ReactEmbedVideo from "react-embed-video";
import ReactPlayer from "react-player";
import { getEmbedUrl } from "youtube-embed";

const GetEmbaded = (url) => {
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const ytmatch = url.match(youtubeRegex);
  if (ytmatch) {
    return `https://www.youtube.com/embed/${ytmatch[1]}`;
  }

  const vimeoRegex = /^(https?:\/\/)?(www\.)?(vimeo\.com\/)(\d+)$/;

  const vimatch = url.match(vimeoRegex);

  if (vimatch) {
    return `https://player.vimeo.com/video/${vimatch[4]}`;
  }

  return false;
};

// https://www.youtube.com/embed/CTh6NXiz1f0

const PlayerModal = ({ isModalPlayer, localUrl }) => {
  // const url = "https://vimeo.com/1040913486";
  const { setPlaying, PlayerHandler } = useDashboardContext();
  console.log(isModalPlayer);

  if (!isModalPlayer) return null;

  const embededUrl = GetEmbaded(localUrl);

  const handleClose = () => {
    PlayerHandler(false);
    setPlaying(true);
  };

  return (
    <Wrapper>
      <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="heading">
            <h2 style={{ marginBottom: "4px", margin: "auto" }}>
              Video Player
            </h2>
            <div className="close-button" onClick={() => handleClose()}>
              Close
            </div>
          </div>

          {/* <ReactPlayer url={url} /> */}
          {embededUrl ? (
            <iframe
              src={embededUrl}
              title="YouTube video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "inherit",
                justifyContent: "center",
              }}
            >
              <h4>Video Not Supported</h4>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
    // <div>
    //   <Modal
    //     aria-labelledby="transition-modal-title"
    //     aria-describedby="transition-modal-description"
    //     open={isModalPlayer}
    //     onClose={handleClose}
    //     closeAfterTransition
    //     slots={{ backdrop: Backdrop }}
    //     slotProps={{
    //       backdrop: {
    //         timeout: 500,
    //       },
    //     }}
    //   >
    //     <Fade in={isModalPlayer}>
    //       <Box>
    //         <h5>Hi</h5>
    //       </Box>
    //     </Fade>
    //   </Modal>
    // </div>
  );
};

export default PlayerModal;
