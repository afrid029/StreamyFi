import { Outlet } from "react-router-dom";
import Wrapper from "../assets/Wrapper/Dashboard";
import logo from "../assets/images/icon.png";
import user from "../assets/user.png";
import { UserContainer, LiveVideo, Footer, StoredVideoContainer } from "../Components";
import { createContext, useContext, useState } from "react";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";

const DashboardContext = createContext();



const Dashboard = () => {

    const [isPlaying, setIsPlaying] = useState(true);  // State to track whether the video is playing or paused
const [videoSource, setvideoSource] = useState("https://tv4.massstream.net/Muthamiltv-web/index.m3u8");


    const setPlaying = (value) => {
        console.log(value);
        
        setIsPlaying(value);
        console.log(isPlaying);
        
    }

  return (
    <DashboardContext.Provider value={{isPlaying, videoSource, setPlaying }}>
    <Wrapper>
      <div className="jumbotron " id="banner">
        <header>
          <div className="row">
            <div className="col-2">
              <img src="src/assets/images/logo.png" alt="logo" />
            </div>
            <div className="col-2 align-center">
              <Button
                sx={{
                  borderRadius: "25px",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    color: "white",
                    border: "1px solid #B8BAB9",
                  },
                }}
                variant="outlined"
                size="small"
              >
                {" "}
                Sign in{" "}
              </Button>
            </div>
          </div>
        </header>
        <LiveVideo
        />
      </div>
      <div className="live">
        <h5>நேரலை</h5> <CircleIcon className="liveIcon" sx={{color: 'red'}} />
        </div>
    
      
    </Wrapper>
    <StoredVideoContainer/>
    <Footer />
    </ DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
