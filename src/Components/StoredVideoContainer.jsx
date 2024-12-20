import React from 'react'
import Wrapper from '../assets/Wrapper/StoredVideoContainer'
import StoredVideo from './StoredVideo'



const StoredVideoContainer = () => {
  return (
    <Wrapper>
        <div className="otherVideo">
            <h4>Our Playlists</h4>
            <hr />
        </div>
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
        <StoredVideo />
    </Wrapper>
  )
}

export default StoredVideoContainer
