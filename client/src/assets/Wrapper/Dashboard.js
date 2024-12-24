import styled from "styled-components";
import custom from "../custom.ttf";
import mass from "../ArgentumSans-Bold.ttf";
const Wrapper = styled.div`
  @font-face {
    font-family: "MyCustomFont";
    src: url(${custom}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "mass";
    src: url(${mass}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  // display: flex;
  // flex-direction: column;

  .jumbotron {
    background-color: #eceeef;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }

  // @media (min-width: 1600px) {
  //   .jumbotron {
  //     height: 60vh;
  //   }
  // }

  // @media (max-width: 1600px) {
  //   .jumbotron {
  //     height: 60vh;
  //   }
  // }

  // @media (max-width: 1200px) {
  //   .jumbotron {
  //     height: 50vh;
  //   }
  // }
  // @media (max-width: 1024px) {
  //   .jumbotron {
  //     height: 50vh;
  //   }
  // }
  // @media (max-width: 768px) {
  //   .jumbotron {
  //     height: 45vh;
  //   }
  // }
  // @media (max-width: 600px) {
  //   .jumbotron {
  //     height: 45vh;
  //   }
  // }

  .header {
    animation: fromLeft 1s linear;
    margin-left: 20px;
    align-items: center;
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

  // @media (min-width: 1600px) {
  //   .header {
  //     margin-left: 20px;
  //     align-items: center;
  //   }
  // }

  // @media (max-width: 1600px) {
  //   .header {
  //     margin-left: 20px;
  //     align-items: center;
  //   }
  // }

  // @media (max-width: 1200px) {
  //   .header {
  //     margin-left: 20px;
  //     align-items: center;
  //   }
  // }

  // @media (max-width: 1024px) {
  //   .header {
  //     margin-left: 20px;
  //     align-items: center;
  //   }
  // }

  // @media (max-width: 768px) {
  //   .header {
  //     margin-left: 20px;
  //     align-items: center;
  //   }
  // }

  // @media (max-width: 600px) {
  //   .header {
  //     margin-left: 20px;
  //     align-items: center;
  //   }
  // }

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

  @media (min-width: 1024px) {
    .col-2 {
      Button {
        font-size: 12px;
      }
    }
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

  @media (max-width: 480px) {
    .col-2 {
      Button {
        font-size: 8px;
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

  @media (min-width: 1600px) {
    .live {
      top: 33vh;
      left: 9vw;
    }
  }

  @media (max-width: 1600px) {
    .live {
      top: 32vh;
      left: 9vw;
    }
  }

  @media (max-width: 1200px) {
    .live {
      top: 22vh;
      left: 9vw;
    }
  }

  @media (max-width: 1024px) {
    .live {
      top: 20vh;
      left: 3vw;
    }
  }

    @media (max-width: 960px) {
    .live {
      top: 9vh;
      left: 4vw;
    }
  }

  @media (max-width: 768px) {
    .live {
      top: 14vh;
      left: 3vw;
    }
  }

  @media (max-width: 600px) {
    .live {
      top: 11vh;
      left: 3vw;
    }
  }

  @media (max-width: 400px) {
    .live {
      top: 10vh;
      left: 3vw;
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

  .mass {
    color: white;
    position: absolute;
    margin: auto;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    font-family: mass, serif;
    font-weight: 600;
    top: 16vh;
    animation: dropdown 2s ease-out forwards;
    transition: filter 0.3s ease;
  }

  .mass: hover {
    filter: drop-shadow(0px 0px 20px #c7c9af);
  }

  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: translateY(-50%); /* Start smaller */
      color: white;
    }
    100% {
      opacity: 1;
      transform: translateY(0%); /* Full size */
      color: red;
    }
  }

  @media (min-width: 1600px) {
    .mass {
      font-size: 5vw;
      letter-spacing: 2rem;
      top: 10vh;
    }

    .isLoggedIn {
    font-size: 4vw !important;
      top: 9vh !important;
    }
  }

  @media (max-width: 1600px) {
    .mass {
      font-size: 4vw;
      letter-spacing: 2rem;
      top: 13vh;
    }

    .isLoggedIn {
      font-size: 5vw !important;
      top: 9vh !important;
    }
  }

  @media (max-width: 1200px) {
    .mass {
      font-size: 3vw;
      letter-spacing: 1.8rem;
      top: 13.5vh;
    }
    .isLoggedIn {
      font-size: 5vw !important;
      top: 10vh !important;
    }
  }

  @media (max-width: 1024px) {
    .mass {
      font-size: 3vw;
      letter-spacing: 1.5rem;
      top: 13.5vh;
    }
    .isLoggedIn {
      font-size: 5vw !important;
      top: 10vh !important;
    }
  }

  
  @media (max-width: 600px) {
    .mass {
      font-size: 3vw;
      letter-spacing: 1.4rem;
      top: 14vh;
    }
    .isLoggedIn {
      font-size: 5vw !important;
      top: 10vh !important;
    }
  }


  @media (max-width: 768px) {
    .mass {
      font-size: 3vw;
      letter-spacing: 1.2rem;
      top: 14vh;
    }
    .isLoggedIn {
      font-size: 5vw !important;
      top: 10vh !important;
    }
  }

  @media (max-width: 600px) {
    .mass {
      font-size: 4vw;
      letter-spacing: 0.8rem;
      font-weight: 500;
      top: 13vh;
    }
    .isLoggedIn {
      font-size: 5vw !important;
      top: 11vh !important;
    }
  }

  @media (max-width: 400px) {
    .mass {
      font-size: 5vw;
      letter-spacing: 0.5rem;
      font-weight: 400;
      top: 12vh;
    }
    .isLoggedIn {
      top: 11vh !important;
    }
  }

  @media (max-width: 320px) {
    .mass {
      font-size: 5vw;
      letter-spacing: 0.4rem;
      font-weight: 300;
      top: 12vh;
    }

    .isLoggedIn {
      top: 11vh !important;
    }
  }
`;

export default Wrapper;
