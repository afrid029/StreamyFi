import styled from "styled-components";

const Wrapper = styled.div`
  .footer {
    background-color: rgb(12, 12, 12);
    width: 93vw;
    height: auto;
    padding: 15px;
    display: flex;
    padding-left: 5vw;
    align-items: start;
    flex-direction: column;

    h3 {
        color: red;
        font-size: 25px;
        margin: 0px;
        font-family: 'mass'
    }
    p {
        color: white;
        align-items: center;
        display: flex;
        gap: 10px;
        font-size: 17px;
        font-family: system-ui;
        svg{
            color: #EB4114;
        }
    }

 
  }



`;

export default Wrapper;
