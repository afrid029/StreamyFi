/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrapper/Login";
import logo from "../assets/images/icon.png";
import { useDashboardContext, useModalContext } from "../Pages/Dashboard";

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

  return (
    <Wrapper>
      <div
        className="modal-overlay"
        style={{ backgroundImage: `url('/src/assets/images/banner-bk.png')` }}
        onClick={() => LoginModalHandler(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="banner">
            <h2 style={{fontSize:'20px', margin: 'auto', letterSpacing: '10px'}}> <span style={{color: 'red'}}>WWW.</span>MASS TV <span style={{color: 'red'}}>.CA</span></h2>
          </div>
          <h4>Login</h4>
          <div className="Form">
            <div className="FormRow">
              <label htmlFor="email">Email</label>
              <input
                defaultValue="mafrid029@gmail.com"
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleEmail(e.target.value)}
              />
            </div>
            <div className="FormRow">
              <label htmlFor="password">Password</label>
              <input
                defaultValue="123456"
                type="password"
                name="password"
                id="password"
                onChange={(e) => handlePassword(e.target.value)}
              />
            </div>

            <button
              onClick={LoginAction}
              disabled={isSubmitting}
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
