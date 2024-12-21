/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom"
import Wrapper from "../assets/Wrapper/Login"
import logo from "../assets/images/icon.png"
import { useDashboardContext, useModalContext } from "../Pages/Dashboard"





const Login = () => {
    const { isLoginModal, LoginModalHandler,handleEmail, handlePassword, LoginAction, isSubmitting } = useDashboardContext();
 
    if (!isLoginModal) return null;

    return (
        <Wrapper>
        <div className="modal-overlay" onClick={() => LoginModalHandler(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="banner">
                    <h4>Welcome to</h4>
                    <img src={logo} alt="" />
                    <h4>StreamyFi</h4>
                </div>
                <h2>Login</h2>
                <div className="Form">
                    <div className="FormRow">
                        <label htmlFor="email">Email</label>
                        <input defaultValue="mafrid029@gmail.com" type="email" name="email" id="email" onChange={(e) => handleEmail(e.target.value)} />
                    </div>
                    <div className="FormRow">
                        <label htmlFor="password">Password</label>
                        <input defaultValue="123456" type="password" name="password" id="password" onChange={(e) => handlePassword(e.target.value)}/>
                    </div>

                    <button onClick={LoginAction} disabled={isSubmitting} className="upload"> {isSubmitting ? 'Loging In..' : 'Login'} </button>
                    
                </div>
                
            </div>
        </div>
        </Wrapper>
    )
}

export default Login;