/* eslint-disable react/no-unknown-property */
// src/VideoPlayer.js
import Wrapper from "../assets/Wrapper/Live";
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';  // Import HLS.js library
import { useDashboardContext } from "../Pages/Dashboard";
import AlertComponent from "./AlertComponent";


const LiveVideo =() => {
  const {isPlaying, LiveStream} = useDashboardContext();
  
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  const [isAlert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Check if HLS.js is supported by the browser

      if (Hls.isSupported()) {
        hlsRef.current = new Hls();  // Create a new HLS.js instance
        hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
          //console.log('Manifest Parsed');
          
        });
        hlsRef.current.loadSource(LiveStream);  // Load the .m3u8 stream
        hlsRef.current.attachMedia(videoRef.current);  // Attach the stream to the video element
  
        // Play the video when the stream is ready
        
        // Clean up the HLS.js instance when the component unmounts
        return () => {
          hlsRef.current.destroy();
        };
      } else {
        //console.error('HLS.js is not supported in this browser.');
        setAlert(true);
        setAlertMessage("Browser Not Supported")
      }
    
   
  }, [LiveStream]);

useEffect (() => {
  // console.log(isPlaying);
  
  if (videoRef.current) {
    // setInterval(()=>{
    //   console.log(videoRef.current.paused);
      
    // }, 2000)
    
    if (!isPlaying) {
      videoRef.current.pause();
    } else {
      //videoRef.current.play();
      // hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        if(!videoRef.current.paused){
          videoRef.current.play();
        }
      //videoRef.current.play();
      // });

      //  hlsRef.current.on(Hls.Events.MEDIA_ATTACHED, () => {
      //   videoRef.current.play();
      // });      

      // Handle any errors
      hlsRef.current.on(Hls.Events.ERROR, function(event, data) {
        switch (data.fatal) {
          case Hls.ErrorTypes.NETWORK_ERROR:
           // console.error('Network error', data);
            setAlert(true);
            setAlertMessage("Network error")
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            //console.error('Media error', data);
            setAlert(true);
            setAlertMessage("Media error")
            
            break;
          case Hls.ErrorTypes.OTHER_ERROR:
            //console.error('Other error', data);
            // setAlert(true);
            // setAlertMessage("Something Went Wrong")
            break;
          default:
            //console.error('Unknown error', data);
            // setAlert(true);
            // setAlertMessage("Something Went Wrong")
        }
      });

    }
  }
},[isPlaying])
  return (
    <Wrapper>
      {isAlert ? <AlertComponent message={alertMessage} setAlert={setAlert} /> : <></> }
       <div className="hls-player">
      <video ref={videoRef} controls autoPlay={true} muted={true} playsInline={true} width="100%" />
      
    </div>
    </Wrapper>
   
  );
};


export default LiveVideo;