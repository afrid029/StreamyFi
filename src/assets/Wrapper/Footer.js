import styled from "styled-components";

const Wrapper = styled.div`
.footer{
    background-color:rgb(3, 3, 3);
    //width: 100vw;
    height: auto;
    padding: 5px 10px;
    border-radius: 7px 7px 0px 0px;
    margin-top: 10px;
    h3 {
        color: white;
        font-size: 2.3rem;

    }
    p {
        color:rgb(255, 255, 255);
        display: flex;
        align-items: center;
        gap: 6px;
        margin: 5px 1px;
    }
}

@media (max-width: 480px) {
    .footer{
        border-radius: 7px 7px 0px 0px;
        margin-top: 10px;
        h3 {
            color: white;

        }
        p {
            color:rgb(255, 255, 255);
            display: flex;
            align-items: center;
            gap: 6px;
            margin: 5px 1px;
        }
    }
}
`

export default Wrapper;