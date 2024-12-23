import styled from "styled-components";

const Wrapper = styled.div`

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.86); /* semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    //padding: 20px;
    border-radius: 8px;
    width: 100vw;
    text-align: center;
    height: 60vh;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
}

.heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
   
}

.close-button {
   // background-color: red;
    color: black;
    border: none;
    //padding: 5px 10px;
    //border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    margin-right: 10px;
    cursor: pointer;
}

.close-button:hover {
    text-shadow: 0px 0px 10px gray;
}

.Form {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: auto;
}
iframe {
width: -webkit-fill-available;
margin: 5px;
height: 50vh;
border-radius: 5px;
border: 0px;
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
        text-align: justify;
    }
}
`

export default Wrapper;