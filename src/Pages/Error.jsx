import React from 'react'
import Wrapper from '../assets/Wrapper/Error'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Error = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
        <div className="error">
            <h1 ><span style={{marginRight: '10px'}}> <img src="/src/assets/images/file-corrupted-svgrepo-com.svg" alt="Icon" width={24} height={24} /></span>Page Not Found</h1>
            <Button onClick={() => navigate("/") }>Go to Home</Button>
        </div>
        <div className="foot">

        </div>

    </Wrapper>
  )
}

export default Error
