/* eslint-disable react/no-unknown-property */
// src/VideoPlayer.js
import Wrapper from "../assets/Wrapper/Videos";
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';  // Import HLS.js library


const LiveVideo = ({ videoSource }) => {
  console.log(videoSource);
  
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if HLS.js is supported by the browser
    if (Hls.isSupported()) {
      const hls = new Hls();  // Create a new HLS.js instance
      hls.loadSource(videoSource);  // Load the .m3u8 stream
      hls.attachMedia(videoRef.current);  // Attach the stream to the video element

      // Play the video when the stream is ready
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });

      // Handle any errors
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.log(data.type);
        }
      });

      // Clean up the HLS.js instance when the component unmounts
      return () => {
        hls.destroy();
      };
    } else {
      console.error('HLS.js is not supported in this browser.');
    }
  }, [videoSource]);

  return (
    <Wrapper>
       <div className="hls-player">
      <video ref={videoRef} controls autoPlay={true} muted={true} width="100%" />
      
    </div>
    </Wrapper>
   
  );
};


export default LiveVideo;