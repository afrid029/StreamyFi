import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
.hls-player {
  width: 60vw;
  height: 45vh;
  animation: popup 1s ease;
}

@media (min-width: 1600px){
    .hls-player {
       height: 60vh;
       width: 80vw;
       position: relative;
       top: 33vh;
    }
}

@media (max-width: 1600px){
    .hls-player {
       height: 60vh;
       width: 80vw;
       position: relative;
       top: 33vh;
    }
}

@media (max-width: 1200px){
    .hls-player {
      height: 50vh;
       width: 80vw;
       position: relative;
        top: 25vh;
    }
}

@media (max-width: 1024px){
    .hls-player {
       height: 50vh;
       width: 90vw;
       position: relative;
     top: 25vh;
    }
}

@media (max-width: 960px){
    .hls-player {
       height: 45vh;
       width: 90vw;
       position: relative;
       top: 16vh;
    }
}



@media (max-width: 768px){
    .hls-player {
       height: 45vh;
       width: 90vw;
       position: relative;
       top: 22vh;
    }
}

@media (max-width: 600px){
    .hls-player {
       height: 45vh;
       width: 90vw;
       position: relative;
        top: 18vh;
    }
}

@media (max-width: 400px){
    .hls-player {
       height: 45vh;
       width: 90vw;
       position: relative;
        top: 18vh;
    }
}



@keyframes popup {
  0% {
    opacity: 0.4;
    transform: scale(0.4);
  }

  90% {
     opacity: 1;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.hls-player video {
  width: 100%;
  height: inherit;
  border-radius: 15px; 
  object-fit: cover; /* Optional: add a border radius to the video itself */
}
`

export default Wrapper;