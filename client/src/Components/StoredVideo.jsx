
import Wrapper from "../assets/Wrapper/StoredVideo";
import React from "react";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDashboardContext } from "../Pages/Dashboard";
      

const StoredVideo = ({job}) => {
  const { setPlaying, PlayerHandler } = useDashboardContext();

  const thumbnail = job.image.replace(/\\/g, "/");
  const UpdatedThumbnail = thumbnail.replace('public/','');


  return (
    <Wrapper>
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

      <Card className="myCard"
        onClick={() => {
          setPlaying(false);
          PlayerHandler(true, job.url);
        }}
        sx={{
          maxWidth: 345,
          marginBottom: "10px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px #8A8887",
          border: "0px",
        }}
      >
        <CardActionArea>
          <Box
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

            {/* <img src="src/assets/images/video.webp" alt="" /> */}
            {/* <iframe
              style={{ width: "-webkit-fill-available" }}
              src="https://www.youtube.com/embed/uD3p_rZPBUQ"
              title="YouTube video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </Box>
          <CardContent>
            <div className="h4">
              <p>{job.title}
              </p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
};

export default StoredVideo;
