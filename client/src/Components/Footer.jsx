import React from 'react'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import PinDropIcon from '@mui/icons-material/PinDrop';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Wrapper from '../assets/Wrapper/Footer';

Wrapper
const Footer = () => {
  return (
    <Wrapper>
        <div className='footer'>
        <h3>Contact</h3>
        <p style={{cursor: 'pointer'}}  onClick={() => window.open("https://masspro.ca/en/")}><HouseSidingIcon />Mass Production Limited <ArrowOutwardIcon/></p>
        <p><PinDropIcon />215 Mississauga Valley Blvd, Mississauga, ON, L5A1Y7</p>
        <p><LocalPhoneOutlinedIcon />+1-905-393-4080</p>
        <p><HourglassTopIcon />Mon - Fri 09:00Am - 06:00Pm</p>
        <p><LocalPostOfficeOutlinedIcon /> info@masspro.ca</p>
       
    </div>
    </Wrapper>
  )
}

export default Footer;
