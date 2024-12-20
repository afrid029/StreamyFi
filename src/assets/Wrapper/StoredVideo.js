import styled from "styled-components";

const Wrapper = styled.div`
width: calc(100vw - 50px);
    display: flex;
    justify-content: center;
    
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
    text-align: justify;
}
}
`

export default Wrapper;