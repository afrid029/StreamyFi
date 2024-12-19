import { Outlet } from "react-router-dom";
import Wrapper from "../assets/Wrapper/Dashboard";
import logo from "../assets/images/icon.png";
import user from "../assets/user.png";
import { UserContainer, LiveVideo, VideoTypeBar } from "../Components";
import { createContext, useContext, useState } from "react";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";

const Dashboard = () => {
  return (
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
          videoSource={"https://tv4.masssstream.net/Muthamiltv-web/index.m3u8"}
        />
        <div className="live">
        <h5>நேரலை</h5> <CircleIcon className="liveIcon" sx={{color: 'red'}} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
