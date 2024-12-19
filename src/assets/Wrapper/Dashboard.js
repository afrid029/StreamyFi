import styled from "styled-components";
import custom from "../custom.ttf"
const Wrapper = styled.div`

    @font-face {
        font-family: 'MyCustomFont';
        src: url(${custom}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @media (max-width: 480px){
        .jumbotron {
            height: 45vh !important;
        }
        img {
            width: 40px;
            height: 40px;
        }
        .col-2 {
            Button {
                font-size: 10px;
            }
        }
    }

  .jumbotron {
    //padding: 1rem;
    margin-bottom: 2rem;
    height: 70vh;
    background-color: #eceeef;
    border-radius: 0.3rem;
    width: 100vw;
    background-image: url("src/assets/images/banner-bk.jpg");
  }
 

  .container {
    //position: relative;
    // margin-left: auto;
    // margin-right: auto;
    // padding-right: 15px;
    // padding-left: 15px;
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
}


.col-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }



#banner {
    background-size: cover;
}

/********** banner **********/
#banner header {
    overflow: hidden;
}

#banner header img {
    max-width: 80px;
}

.align-center {
    display: flex;
    align-items: center;
}

h5{
    font-family: MyCustomFont, sans-serif;
    margin-left: 15px;
    font-size: 1rem;
}

.live{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.liveIcon {
    animation: blink 0.6s linear infinite alternate;
}

@keyframes blink {
0% {
    opacity: 0;
}
    100%{
        opacity: 1;
    }
}

`;

export default Wrapper;
