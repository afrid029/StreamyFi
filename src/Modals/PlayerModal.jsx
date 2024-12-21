import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useDashboardContext } from "../Pages/Dashboard";
import Wrapper from "../assets/Wrapper/Player";

const PlayerModal = React.memo(({isModalPlayer}) => {
  const { setPlaying, PlayerHandler } = useDashboardContext();
  console.log(isModalPlayer);

  
  if (!isModalPlayer) return null;

  const handleClose = () => {
    PlayerHandler(false);
    setPlaying(true);

  };

  return (

    <Wrapper>
    <div className="modal-overlay">
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="heading">
            
            <h2 style={{marginBottom: '4px', margin: 'auto'}}>Video Player</h2>
            <div className="close-button" onClick={() => handleClose()} >Close</div>

        </div>
        <iframe
              
              src="https://www.youtube.com/embed/uD3p_rZPBUQ"
              title="YouTube video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        
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
},);

export default PlayerModal;
