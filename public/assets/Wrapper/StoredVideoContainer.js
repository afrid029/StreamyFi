import styled from "styled-components";

const Wrapper = styled.div`

position: relative;

@media (max-width: 1600px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 153px;
      h4 {
        margin-left: 20px;
        font-size: 20px;
    }

}

@media (max-width: 1200px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 160px;
      h4 {
        margin-left: 18px;
        font-size: 20px;
    }

}

@media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 150px;
      h4 {
        margin-left: 15px;
        font-size: 18px;
    }


}

@media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 150px;
     h4 {
        margin-left: 10px;
        font-size: 15px;
    }


}

@media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 143px;
    h4 {
        margin-left: 10px;
        font-size: 12px;
    }

}

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
`;

export default Wrapper;
