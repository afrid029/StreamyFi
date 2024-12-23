
import { Snackbar } from "@mui/material";
import { useState, useEffect } from "react";

const AlertComponent = ({message, setAlert}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true);

        const timer = setTimeout(()=>{
            setOpen(false)
            setAlert(false)
        }, 5000)

        return () => clearTimeout(timer)
    },[])
    return (
        <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open}
        message={message}
        autoHideDuration={5000} // You can also set this for auto hide
        //onClose={() => setOpen(false)} // Optional: Add close handler
        />
    )
}

export default AlertComponent;

