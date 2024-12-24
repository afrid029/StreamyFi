import styled from "styled-components";

const Wrapper = styled.div`

position: relative;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;

.otherVideo{
    width: 95vw;
}
h4 {
    margin-bottom: 10px;
    font-family: system-ui;
    color: #737373;
}
hr {
    border: 2px solid #DCDCDC;
    margin-bottom: 20px;
    width: 89vw;
}

@media (min-width: 1600px) {
    top: 27vh;
      h4 {
        margin-left: 20px;
        font-size: 20px;
    }

}

@media (max-width: 1600px) {
    top: 26vh;
      h4 {
        margin-left: 20px;
        font-size: 20px;
    }

}

@media (max-width: 1200px) {
    top: 15vh;
      h4 {
        margin-left: 18px;
        font-size: 20px;
    }

}

@media (max-width: 1024px) {
    top: 14vh;
      h4 {
        margin-left: 15px;
        font-size: 18px;
    }
}

@media (max-width: 960px) {
    top: 8vh;
      h4 {
        margin-left: 15px;
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    top: 13vh;
     h4 {
        margin-left: 10px;
        font-size: 15px;
    }


}

@media (max-width: 600px) {
    top: 9vh;
    h4 {
        margin-left: 10px;
        font-size: 12px;
    }

}

@media (max-width: 400px) {
    top: 7vh;
    h4 {
        margin-left: 10px;
        font-size: 12px;
    }

}


`;

export default Wrapper;
