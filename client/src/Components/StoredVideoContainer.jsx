import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrapper/StoredVideoContainer";
import StoredVideo from "./StoredVideo";
import { useDashboardContext } from "../Pages/Dashboard";
import Footer from "./Footer";

const StoredVideoContainer = () => {
  const [videoThere, setVideoThere] = useState(false);
  const { videos } = useDashboardContext();
  // console.log('Videos ', videos.length);

  

  useEffect(() => {
    if (videos.length > 0) {
      // console.log("video there");
      setVideoThere(true);
    } else {
      setVideoThere(false);
    }
  },[])

  return (
    <Wrapper>
      <div className="otherVideo">
        <h4>Our Playlist</h4>
        <hr />
      </div>

      {videoThere ? (
        videos.map((job) => {
          return <StoredVideo key={job.ID} video={job} />;
        })
      ) : ( 
        <h3>No videos there</h3>
      ) }

      {/* 
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo /> */}
        <Footer/>
    </Wrapper>
  );
};

export default StoredVideoContainer;
