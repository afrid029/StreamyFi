import styled from "styled-components";

const Wrapper = styled.div`
    
  .social {
    color: white;
    position: absolute;
    margin: auto;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    width: 90vw;
    animation: dropdown 2s ease-out forwards; 
    
  }

  .icon {
    transition : filter 0.3s ease;
    cursor: pointer;
  }

  .icon:hover {
    transform: scale(1.4);
    filter: drop-shadow(0px 0px 20px #C7C9AF);
  }

  
  @media (max-width: 1600px){
    svg {
        width: 25px;
    }
    .social {
        top: 22vh;
    }
    
  }

  @media (max-width: 1200px){
    svg {
        width: 22px;
    }
    .social {
        top: 22vh;
    }
    
  }

   @media (max-width: 1024px){
    svg {
        width: 21px;
    }
    .social {
        top: 21vh;
    }
    
  }

   @media (max-width: 768px){
    svg {
        width: 19px;
    }
    .social {
        top: 21vh;
    }
    
  }

  @media (max-width: 600px){
    svg {
        width: 18px;
    }
    .social {
        top: 21vh;
    }
    
  }


   @media (max-width: 450px){
    svg {
        width: 15px;
    }
    .social {
        top: 20vh;
    }
    
  }

  

  @media (max-width: 320px){
    svg {
        width: 15px;
    }
    .social {
        top: 18vh;
    }
    
  }

`
export default Wrapper;