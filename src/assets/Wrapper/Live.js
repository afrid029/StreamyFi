import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
.hls-player {
  //max-width: 100vw;
  width: 60vw;
  height: calc(70vh - 110px);
  //margin: 0 auto;
  //background-color: #000;  /* Optional background color for the player */
  //border: 0.4px solid #ccc;  /* Optional border */
  border-radius: 15px;  /* Optional border radius */


  margin-bottom: 15px;
}

.hls-player video {
  width: 100%;
  height: inherit;
  border-radius: 15px;  /* Optional: add a border radius to the video itself */
}

 @media (max-width: 480px){
        .hls-player {
            height: calc(45vh - 80px);
            width: 90vw;
            margin-bottom: 10px;
        }
    }

`

export default Wrapper;