import ReactPlayer from "react-player";
import Wrapper from "../assets/Wrapper/StoredVideo";
import React, { useContext, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDashboardContext } from "../Pages/Dashboard";

const StoredVideo = () => {

  const {setPlaying} = useDashboardContext();

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

      <Card onClick={() => setPlaying(false)
      }
        sx={{
          maxWidth: 345,
          marginBottom: "10px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px #8A8887",
          border: '0px'
        }}
      >
        <CardActionArea>
          <Box sx={{ position: "relative", height: 140 }}>
            <iframe
              style={{ width: "-webkit-fill-available" }}
              src="https://www.youtube.com/embed/uD3p_rZPBUQ"
              title="YouTube video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <CardContent>
            <div className="h4">
              <p>
                This is some long text that will be hidden and replaced with an
                ellipsis if it overflows the container. The ellipsis will show
                at the point where the text exceeds the container width. This is
                some long text that will be hidden and replaced with an ellipsis
                if it overflows the container. The ellipsis will show at the
                point where the text exceeds the container width.
              </p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
};

export default StoredVideo;
