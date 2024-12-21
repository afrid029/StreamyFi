import React from 'react'
import Wrapper from '../assets/Wrapper/StoredVideoContainer'
import StoredVideo from './StoredVideo'
import { useDashboardContext } from '../Pages/Dashboard'



const StoredVideoContainer = () => {
  const {videos} = useDashboardContext();
  console.log(videos);
  
  return (
    <Wrapper>
        <div className="otherVideo">
            <h4>Our Playlist</h4>
            <hr />
        </div>

        {videos.map((job) => {
          return <StoredVideo job={job} />
        })}
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
  )
}

export default StoredVideoContainer
