import styled from "styled-components";

const Wrapper = styled.div`
    
    .otherVideo{
        width: 90vw;
        margin-left: 10px;
    }
    h4 {
        margin-bottom: 10px;
    }
    hr {
        border: 2px solid #DCDCDC;
        margin-bottom: 20px;
        width: 89vw;
    }

    @media (max-width: 480px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    
    }
`

export default Wrapper;