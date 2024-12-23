/* eslint-disable react/prop-types */
import Wrapper from "../assets/Wrapper/LogoutModal";

const LogoutModal = ({isOpen}) => {
    //console.log(isOpen);
    if (!isOpen) {
        return null;
    }

    return (
        <Wrapper>
            <div className="modal-overlay">
            <div className="modal-content" >
            <svg viewBox="0 0 40 40" width="40" height="40">
    <circle fill="#7E7F7E" cx="10" cy="20" r="4">
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 8; 0 -8; 0 8" 
        repeatCount="indefinite" 
        begin="0.1s"/>
    </circle>
    <circle fill="#7E7F7E" cx="20" cy="20" r="4">
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 6; 0 -6; 0 6" 
        repeatCount="indefinite" 
        begin="0.2s"/>
    </circle>
    <circle fill="#7E7F7E" cx="30" cy="20" r="4">
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 4; 0 -4; 0 4" 
        repeatCount="indefinite" 
        begin="0.3s"/>
    </circle>
                        </svg>
            </div>
        </div>
        </Wrapper>
    );
}

export default LogoutModal;