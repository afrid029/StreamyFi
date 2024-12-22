import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrapper/StoredVideoContainer";
import StoredVideo from "./StoredVideo";
import { useDashboardContext } from "../Pages/Dashboard";

const StoredVideoContainer = () => {
  const [videoThere, setVideoThere] = useState(false);
  const { videos } = useDashboardContext();
  console.log(videos);

  

  useEffect(() => {
    if (videos) {
      console.log("video there");
      setVideoThere(true);
    } else {
      setVideoThere(false);
    }
  },[videos])

  return (
    <Wrapper>
      <div className="otherVideo">
        <h4>Our Playlist</h4>
        <hr />
      </div>

      {videoThere ? (
        videos.map((job) => {
          return <StoredVideo key={job.id} job={job} />;
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
    </Wrapper>
  );
};

export default StoredVideoContainer;
