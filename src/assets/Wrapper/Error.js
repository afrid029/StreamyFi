import styled from "styled-components";

const Wrapper = styled.div`
 .error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    height: 90vh;
    border: 5px solid #071F54;
    margin: 10px;
    border-radius: 25px;
    animation: load 1s ease;
 }  

 @keyframes load {
    0% {
        transform : translateX(-100%);
        opacity: 0;
    }
    100% {
        transform : translateX(0%);
        opacity: 1;
    }
 }

 .foot {
    height:calc(10vh - 25px);
    background-color: #071F54;
    bottom:0px;
    position: fixed;
    width: 100vw; 
    animation: load1 1s ease;
 }  

 @keyframes load1 {
    0% {
        transform : translateY(100%);
        opacity: 0;
    }
    100% {
        transform : translateY(0%);
        opacity: 1;
    }
 }
`

export default Wrapper;