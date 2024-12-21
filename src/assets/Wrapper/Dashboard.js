import styled from "styled-components";
import custom from "../custom.ttf";
const Wrapper = styled.div`
  @font-face {
    font-family: "MyCustomFont";
    src: url(${custom}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  .jumbotron {
    background-color: #eceeef;
    border-radius: 0.3rem;
    background-image: url("src/assets/images/banner-bk.png");
    display: flex;
    justify-content: center;
    align-items: center;
  }

   @media (max-width: 1600px) {
    .jumbotron {
      height: 60vh;
    }
  }

   @media (max-width: 1200px) {
    .jumbotron {
      height: 50vh;
    }
  }
    @media (max-width: 1024px) {
    .jumbotron {
      height: 50vh;
    }
  }
  @media (max-width: 768px) {
    .jumbotron {
      height: 45vh;
    }
  }
  @media (max-width: 600px) {
    .jumbotron {
      height: 45vh;
    }
  }
 

  .header {
    animation: fromLeft 1s linear;
  }

  @keyframes fromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

   @media (max-width: 1600px) {
    .header {
      margin-left: 20px;
      align-items: center;
    }
  }

   @media (max-width: 1200px) {
    .header {
      margin-left: 20px;
      align-items: center;
    }
  }

   @media (max-width: 1024px) {
    .header {
      margin-left: 20px;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .header {
      margin-left: 20px;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    .header {
      margin-left: 20px;
      align-items: center;
    }
  }

 

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    .col-2 {
      display: inline-flex;
      justify-content: center;
    }
  }

  .col-2 {
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

    @media (max-width: 1024px) {
    .col-2 {
      Button {
        font-size: 12px;
      }
    }
  }
  
   @media (max-width: 768px) {
    .col-2 {
      Button {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 600px) {
    .col-2 {
      Button {
        font-size: 10px;
      }
    }
  }
 

  #banner {
    background-size: cover;
  }

  /********** banner **********/
  #banner header {
    overflow: hidden;
    position: fixed;
    width: 100vw;
    z-index: 10;
    background-color: white;
    top: 0px;
  }

  #banner header img {
    max-width: 120px;
  }

  .align-center {
    display: flex;
    align-items: center;
    animation: fromRight 1s linear;
    margin-right: 20px;
  }

  @keyframes fromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  h5 {
    font-family: MyCustomFont, sans-serif;
    font-size: 1rem;
  }

  .live {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    margin: 15px;
    h5 {
      margin: 0px;
    }
  }

   @media (max-width: 1600px) {
    .live {
      top: 180px;
      left: 50px;
    }
  }

   @media (max-width: 1200px) {
    .live {
      top: 180px;
      left: 30px;
    }
  }
  
   @media (max-width: 1024px) {
    .live {
      top: 173px;
      left: 24px;
    }
  }

   @media (max-width: 768px) {
    .live {
      top: 175px;
      left: 15px;
    }
  }

  @media (max-width: 600px) {
    .live {
      top: 170px;
      left: 15px;
    }
  }

  

  .liveIcon {
    animation: blink 0.6s linear infinite alternate;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Wrapper;
