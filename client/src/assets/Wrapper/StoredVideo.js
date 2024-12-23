import styled from "styled-components";

const Wrapper = styled.div`

@media (max-width: 1600px) {
    width: 22vw;
    display: flex;
    justify-content: center;
}

@media (max-width: 1200px) {
    width: 30vw;
    display: flex;
    justify-content: center;
}

@media (max-width: 1024px) {
    width: 45vw;
    display: flex;
    justify-content: center;
}

@media (max-width: 768px) {
    width: 45vw;
}

@media (max-width: 600px) {
    width: 45vw;
    display: flex;
    justify-content: center;

}

.h4 {
    height: 46px; /* Maximum height for the container */
    overflow: hidden; /* Hide overflow */
    p {
        display: -webkit-box; /* Enable multi-line truncation */
        -webkit-box-orient: vertical; /* Set the box orientation to vertical */
        -webkit-line-clamp: 3; /* Limit text to 3 lines */
        overflow: hidden; /* Hide text that exceeds the limit */
        text-overflow: ellipsis; /* Add ellipsis (...) at the end of the last visible line */
        margin: auto;
        text-align: center;
        font-weight: 650;
    }
}

.myCard{
    transition: transform 0.5 ease;
    width: inherit;
}

.myCard:hover {
        transform: scale(1.1);
        margin: 10px 0px 20px 0px;
    }


Card:hover {
    PlayCircleFilledRoundedIcon{
        color: "#34E628",
        backgroundColor: "transparent",
        border: '1px solid #34E628'
    }

   
}
`

export default Wrapper;