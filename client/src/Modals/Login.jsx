/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrapper/Login";
import { useDashboardContext } from "../Pages/Dashboard";
import { useState } from "react";

const Login = () => {
  const {
    isLoginModal,
    LoginModalHandler,
    handleEmail,
    handlePassword,
    LoginAction,
    isSubmitting,
  } = useDashboardContext();

  if (!isLoginModal) return null;

  const [emptyEmailHandler, setEmptyEmailHandler] = useState(true);
  const [emptyPasswordHandler, setEmptyPasswordHandler] = useState(true);

  const emailHandler = (e) => {
   
    if (e.target.value.length > 0) {
      //console.log(e.target.value.length);
      handleEmail(e.target.value)
      setEmptyEmailHandler(false);
      
    }else {
      setEmptyPasswordHandler(true);
    }
    
  }
  const passwordHandler = (e) => {
    //console.log(e.target.value.length);
    
    if (e.target.value.length > 0) {
      handlePassword(e.target.value)
      setEmptyPasswordHandler(false);
      
    }else {
      setEmptyPasswordHandler(true);
    }
  }

  return (
    <Wrapper>
      <div
        className="modal-overlay"
        style={{ backgroundImage: `url('/src/assets/images/banner-bk.png')` }}
        onClick={() => LoginModalHandler(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="banner">
            <h2> <span style={{color: 'red'}}>WWW.</span>MASSTV<span style={{color: 'red'}}>.CA</span></h2>
          </div>
          <h4>Login</h4>
          <div className="Form">
            <div className="FormRow">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => emailHandler(e) }
              />
            </div>
            <div className="FormRow">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => passwordHandler(e) }
              />
            </div>

            <button
              onClick={LoginAction}
              disabled={isSubmitting || emptyEmailHandler || emptyPasswordHandler}
              className="upload"
            >
              {" "}
              {isSubmitting ? "Loging In.." : "Login"}{" "}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
