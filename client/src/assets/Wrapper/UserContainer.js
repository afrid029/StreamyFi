import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    width: 250px;
    max-height: 175px;
    min-height: 50px;
    background-color: white;
    top: 60px;
    border-radius:5px;
    padding: 5px;
    box-shadow: 0px 0px 15px #B0AEAF;
    // display: ${props => props.userOpened ? 'flex' : 'none'};
    justify-content: center;
    align-items: center; 
    transition: height 1s ease;

.container {
    display: flex;
    justify-content: center;
    height: inherit;
    align-items: center;
    width: 240px;
    flex-direction: column;
    
}

.btn {
    background-color: #42A8D3;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    width: 90%;
    height: 40px;
    
}



.user {
width: 40px;
height: 40px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content:space-around;
    width: 100%;
    gap: 3px;
}

.addVideo {
    align-items: center;
    background-color: #689B1D;
    text-align: center;
    font-size:10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    height:15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

.logout {
    background-color:#9B1D1D;
}

hr {
    color: black;
    width: 240px;
}

.showModel {
    display: flex;
}
`
export default Wrapper;