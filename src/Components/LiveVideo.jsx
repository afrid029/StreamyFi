/* eslint-disable react/no-unknown-property */
// src/VideoPlayer.js
import Wrapper from "../assets/Wrapper/Live";
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';  // Import HLS.js library
import { useDashboardContext } from "../Pages/Dashboard";


const LiveVideo = () => {
  const {isPlaying, videoSource} = useDashboardContext();
  
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    // Check if HLS.js is supported by the browser
    if (Hls.isSupported()) {
      hlsRef.current = new Hls();  // Create a new HLS.js instance
      hlsRef.current.loadSource(videoSource);  // Load the .m3u8 stream
      hlsRef.current.attachMedia(videoRef.current);  // Attach the stream to the video element

      // Play the video when the stream is ready
      
        
     

      // Clean up the HLS.js instance when the component unmounts
      return () => {
        hlsRef.current.destroy();
      };
    } else {
      console.error('HLS.js is not supported in this browser.');
    }
  }, [videoSource, isPlaying]);

useEffect (() => {
  if (videoRef.current) {
    if (!isPlaying) {
      videoRef.current.pause();
    } else {
      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });

      // Handle any errors
      hlsRef.current.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.log(data.type);
        }
      });

    }
  }
},[isPlaying])
  return (
    <Wrapper>
       <div className="hls-player">
      <video ref={videoRef} controls autoPlay={true} muted={true} width="100%" />
      
    </div>
    </Wrapper>
   
  );
};


export default LiveVideo;