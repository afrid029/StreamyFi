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

}

@media (max-width: 1200px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 160px;

}

@media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 150px;

}

@media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 150px;

}

@media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 143px;

}

.otherVideo{
    width: 90vw;
}
h4 {
    margin-bottom: 10px;
}
hr {
    border: 2px solid #DCDCDC;
    margin-bottom: 20px;
    width: 89vw;
}
`;

export default Wrapper;
