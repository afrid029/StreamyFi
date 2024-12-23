import Wrapper from "../assets/Wrapper/UserContainer";
import { FaPlus } from "react-icons/fa6";
import face from "../assets/images/happiness.png"
// import { UseDashboardContext } from "../Pages/Dashboard";
import { useState } from "react";
import { AddVideo, AddLive, LogoutModal, Login } from "../Modals";

const UserContainer = () => {

    const [isVideoModalOpen, setVideoModalOpen] = useState(false)
    const [isLiveModalOpen, setLiveModalOpen] = useState(false)
    const [isLogout, setLogout] = useState(false);
    const [isLogin, setLogin] = useState(false);

    const addLive = () => {
       
        setLiveModalOpen(!isLiveModalOpen);
        
    }

    const addVideo = () => { 
        //console.log(isVideoModalOpen);
        setVideoModalOpen(!isVideoModalOpen);
        //console.log(isVideoModalOpen);
        
    }

    const logoutHandler = () => {
        //console.log('Logged out');
        setLogout(!isLogout);

        setTimeout(() => {
            setLogout(false);
        }, 3000);  
    }

    const loginModel = () => {
        setLogin(!isLogin);
    }

    // const {userOpened} = UseDashboardContext()
    return (
        <>
        <Wrapper >
            <div >
                <div  className="container">
                    <button onClick={loginModel} className="btn login">Login</button>
                </div>

                <div style={{display: 'none'}} className="container ">
                    <img src={face} alt="" className="user"/>
                    <h3>Hi Jhon, Welcome</h3>
                    <hr />
                    <div className="buttons">
                        <div onClick={addVideo} className="addVideo"><FaPlus/> Video</div>
                        <div onClick={addLive} className="addVideo"><FaPlus/> Live </div>
                        <div onClick={logoutHandler} className="addVideo logout">Logout</div>
                    </div>
                </div>
            </div>

            {/* <AddVideo isOpen={isVideoModalOpen} onClose={setVideoModalOpen} /> */}
            
        </Wrapper>
       <AddVideo isOpen={isVideoModalOpen} onClose={addVideo} />
       <AddLive isOpen={isLiveModalOpen} onClose={addLive} />
       <LogoutModal isOpen={isLogout}/>
       <Login isOpen={isLogin} onClose={loginModel}/>
       </>
        
    )
}

export default UserContainer;