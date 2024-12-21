import styled from "styled-components";

const Wrapper = styled.div`

display: grid;
grid-template-columns: 30vw 30vw 30vw;
justify-content: center;
background-color: #D9DACF;
padding: 10px;
    div {
        justify-self: center;
        cursor: pointer;
        transition: margin-top 0.4s ease;
        font-weight: 600;
    }
    
    div:hover {
        margin-top: -3px;
    }

    @media (max-width: 600px) {
        .panel {
            font-size: 10px;
        }
    }
`

export default Wrapper;