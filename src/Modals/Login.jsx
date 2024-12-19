/* eslint-disable react/prop-types */
import { Form } from "react-router-dom"
import Wrapper from "../assets/Wrapper/Login"
import logo from "../assets/images/icon.png"

Wrapper
const Login = ({isOpen, onClose}) => {

    if (!isOpen) return null;

    return (
        <Wrapper>
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="banner">
                    <h4>Welcome to</h4>
                    <img src={logo} alt="" />
                    <h4>StreamyFi</h4>
                </div>
                <h2>Login</h2>
                <Form action="post" className="Form">
                    <div className="FormRow">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="FormRow">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <button className="upload"> Login </button>
                    
                </Form>
                
            </div>
        </div>
        </Wrapper>
    )
}

export default Login;