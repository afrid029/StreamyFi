import styled from "styled-components";

const Wrapper = styled.div`
    /* Modal.css */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 90vw;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.close-button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.close-button:hover {
    background-color: darkred;
}

.Form {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: auto;
}

.FormRow {
    display: flex;
    width: 95%;
    flex-direction: column;
    margin: auto;
    margin-bottom: 10px !important;
    label {
        width: 95%;
        margin-bottom: 10px !important;
        margin: auto;
        text-align: left
    }
    input {
        width: 95%;
        height: 25px;
        border-radius: 5px;
        box-shadow: 0px 0px 12px rgb(168, 165, 165);
        border: transparent;
        margin: auto;
    }

}

.upload {
    height: 40px;
    width: 25vw;
    margin: auto;
    border-radius: 8px;
    border: transparent;
    box-shadow: 0px 0px 12px rgb(190, 188, 188);
    background-color:rgb(80, 183, 39);
    font-weight: 1000;
}

.banner {
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
    
    img {
        width: 50px;
        height: 50px;
        animation: wave 2s linear infinite ;
    }
    
}

@keyframes wave { 
    0% {
        transform: rotate(90deg)
    }
    25% {
         transform: rotate(180deg)
    }
     50% {
         transform: rotate(270deg)
    }
     75% {
         transform: rotate(360deg)
    }
   
     100% {
         transform: rotate(450deg)
    }
   
}

`



export default Wrapper;