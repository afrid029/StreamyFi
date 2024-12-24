import Wrapper from "../assets/Wrapper/StoredVideo";
import React, {useState} from "react";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useDashboardContext } from "../Pages/Dashboard";
import { CustomeFetch } from "../Utils/CustomeFetch";

import { Snackbar } from "@mui/material";
import { redirect } from "react-router-dom";



const StoredVideo = ({ video }) => {
  const { setPlaying, PlayerHandler, isloggedin } = useDashboardContext();
  
    const [isAlert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('');

  const thumbnail = video.image.replace(/\\/g, "/");
  const UpdatedThumbnail = thumbnail.replace("public/", "");

  const DeleteVideo = async () => {
    // console.log(job.ID);

    const data = {ID : video.ID};

    await CustomeFetch.delete(`/admin/deletevideo/${data.ID}`,)
    .then((res) => {

      //console.log('deleted', res);
      
      setAlert(true);
      setAlertMessage("Video Deleted Successfully!")
      return redirect("/");
    })
    .catch((er) => {
     // console.log(er);
      setAlert(true);
      //console.log('noy deleted', er);
      
      setAlertMessage("Something Went Wrong. Try Again Later")
    });

    
  }

  return (
    <Wrapper>
       <Snackbar
              anchorOrigin={{ vertical:'top', horizontal:'center' }}
              open={isAlert}
              message={alertMessage}
              autoHideDuration={5000} // You can also set this for auto hide
              //onClose={() => setOpen(false)} // Optional: Add close handler
              />
      {/* <div className="videoplayer">
     <iframe
        src="https://www.youtube.com/embed/uD3p_rZPBUQ"
        title="YouTube video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        <div className="h4">
            <p>This is some long text that will be hidden and replaced with an ellipsis if it overflows the container. The ellipsis will show at the point where the text exceeds the container width. This is some long text that will be hidden and replaced with an ellipsis if it overflows the container. The ellipsis will show at the point where the text exceeds the container width.</p>
        </div>
    </div> */}
 {/* {isAlert ? <AlertComponent message={alertMessage} setAlert={setAlert} /> : <></> } */}
      <Card
        className="myCard"
        sx={{
          // maxWidth: 345,
          marginBottom: "10px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px #8A8887",
          border: "0px",
        }}
      >
        <CardActionArea>
          <Box
            onClick={() => {
              setPlaying(false);
              PlayerHandler(true, video.url);
            }}
            sx={{
              position: "relative",
              height: 140,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${UpdatedThumbnail}`}
              alt="green iguana"
            />

            <PlayCircleFilledRoundedIcon
              sx={{
                position: "absolute",
                fontSize: "48px",
                color: "#34E628",
                backgroundColor: "white",
                borderRadius: "25px",
                transition: "transform 0.5s linear",
                "&:hover": {
                  color: "#076900",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  transform: "scaleX(-1)",
                },
              }}
            />
          </Box>
          <CardContent>
            <div className="h4">
              <p>{video.title}</p>
            </div>
            {/* {isloggedin ? 
            <Button
              onClick={DeleteVideo}
              color="error"
              sx={{
                borderRadius: "25px",
                "&:hover": {
                  backgroundColor: "#E44C4C",
                  color: "white",
                  border: "1px solidrgb(255, 255, 255)",
                  //position: 'fixed'
                },
              }}
              variant="contained"
              size="small"
            >
              Delete
            </Button>
            : <></>} */}
          </CardContent>
        </CardActionArea>
        
      </Card>
      {isloggedin ? 
            <Button
              onClick={DeleteVideo}
              color="error"
              sx={{
                borderRadius: "25px",
                width: "inherit",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#E44C4C",
                  color: "white",
                  border: "1px solidrgb(255, 255, 255)",
                  //position: 'fixed'
                },
              }}
              variant="contained"
              size="small"
            >
              Delete
            </Button>
            : <></>}
    </Wrapper>
  );
};

export default StoredVideo;
