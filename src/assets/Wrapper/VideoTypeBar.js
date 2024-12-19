import styled from "styled-components";

const Wrapper = styled.div`
.typeBar {
    width: 100vw;
    height: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    border-radius:3px;
    align-items: center;
    margin-bottom: 10px;
    .option {
        display: inline-flex;
        justify-content:center;
        width: 49vw;
        text-decoration: none;
        color: black;
    }
}

.videoClass {
    background-image:linear-gradient(90deg,#E0E6E1 50%,#8B938C 50%);
    transition: background-image 1s ease;
}

.liveClass {
    background-image:linear-gradient(90deg,#8B938C 50%,#E0E6E1 50%);
    //transition: background-image 1s ease;
}

`

export default Wrapper;