
import {
  Outlet,
  Link,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/Wrapper/Dashboard";
import logo from "../assets/images/icon.png";
import user from "../assets/user.png";
import Alert from '@mui/material/Alert';
import {
  UserContainer,
  LiveVideo,
  Footer,
  StoredVideoContainer,
  AdminPanel,
  Social,
} from "../Components";
import { createContext, useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import { AddLive, AddVideo, Login, PlayerModal, UpdateLogo } from "../Modals";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { CustomeFetch } from "../Utils/CustomeFetch";
import { Snackbar } from "@mui/material";
import AlertComponent from "../Components/AlertComponent";


// import * from "s"

export const loader = async () => {
  let data1;
  let videos;

  await CustomeFetch.get("/admin/checkuser")
    .then((response) => {
      //console.log('User Check', response);
      if (response.data.auth) {
        localStorage.setItem("auth", "true");
      } else {
        localStorage.setItem("auth", "false");
      }
    })
    .catch((er) => {
      //console.log(er);
      localStorage.setItem("auth", "false");
    });

  await CustomeFetch.get("/user/getlogo")
    .then((res) => {
      //console.log("logo is",res.data.result[0]);
      if (res.data.result.length == 1) {
        localStorage.setItem("logo", res.data.result[0].image);
        //console.log("logo is",localStorage.getItem("logo"));
        
      } else {
        localStorage.removeItem("logo");
      }
    })
    .catch((er) => {
      console.error('Error in Fetching Logo');
    });

  await CustomeFetch.get("/user/getstream")
    .then((res) => {
      if (res.data.result.length == 1) {
        // localStorage.setItem("logo", res.data.result[0].image);
        data1 = res.data.result[0];
        //console.log("logo is",localStorage.getItem("logo"));
        
      } else {
        data1 = {stream: "null"}
      }
    })
    .catch((er) => {
      console.error('Error in Fetching Live Stream');
    });

  await CustomeFetch.get("/user/getallvideo")
    .then((response) => {

      // console.log(response.data.result);
      
      if(response.data.result.length > 0){
        videos = response.data.result;
      }else {
        videos = []
      }
      
    })
    .catch((er) => {
      console.error('Error in Fetching Videos');
    });

  // const { stream } = data1;

  const combined = [data1, { videos }];

  return combined;
};

const DashboardContext = createContext();
const ModalContext = createContext();

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(true); // State to track whether the video is playing or paused
  const [isModalPlayer, setModalPlayer] = useState(false);

  const [isLoginModal, setLoginModal] = useState(false);
  const [isSubmitting, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloggedin, setLoggedin] = useState(false);

  const [isLiveModal, setLiveModal] = useState(false);
  const [isVideoModal, setVideoModal] = useState(false);

  const [LiveStream, setLiveSource] = useState("");

  const [source, setSource] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(false);
  const [bgImage, setBg] = useState("");

  const [isAlert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('');

  const data = useLoaderData();

  const { stream } = data[0];
  const { videos } = data[1];
//  console.log(stream);

//   console.log(videos);
// console.log(data);


  useEffect(() => {
    let token = localStorage.getItem("logo");
    if (token) {
      setBackgroundImage(true);
      token = token.replace(/\\/g, "/");
      const newToken = token.replace('public/','');
      setBg(newToken);
      //console.log(token);
    } else {
      setBackgroundImage(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token === "true") {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  useEffect(() => {
    if (stream && stream !== LiveStream) {
      //console.log("Source Updated");

      setLiveSource(stream);
      //console.log(stream);
      
      if(!stream.endsWith('m3u8')){
        setAlert(true);
        setAlertMessage("Invalid Stream Key")
      }
    }
  }, [stream, LiveStream]); // Only update if stream changes and is different from the current state

  //console.log(LiveStream);

  const setPlaying = (value) => {
    setIsPlaying(value);
  };

  const [localUrl, setLocalUrl] = useState("");

  const PlayerHandler = (value, url) => {
    setLocalUrl(url);
    setModalPlayer(value);
  };

  const LoginModalHandler = (value) => {
    setLoginModal(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const AddLiveModalHandler = (value) => {
    setLiveModal(value);
  };
  const AddVideoModalHandler = (value) => {
    setVideoModal(value);
  };

  const LoginAction = async () => {
    setSubmit(true);
    //console.log(email);

    const data = {
      email,
      password,
    };

    //console.log(data);
    await CustomeFetch.post("/admin/login", data)
      .then((re) => {
        //console.log(re);
        setLoggedin(true);
        LoginModalHandler(false);
        setAlert(true);
        setAlertMessage("Admin Logged In Successfully!")
        setSubmit(false);
      
        return null;
      })
      .catch((er) => {
        const { data } = er.response;
        //console.log("Error ", data);
        //LoginModalHandler(false);
        setSubmit(false);
        setAlert(true);
        setAlertMessage("Check Your Credentials")
     
        return null;
      });
  };

  const LiveVideoUploadAction = async () => {
    setSubmit(true);
    // const stream = LiveStream;
    // console.log(stream);
    const data = {
      stream: source,
    };

    await CustomeFetch.post("/admin/loadlive", data)
      .then((res) => {
       // console.log(res);
        AddLiveModalHandler(false);
        setSubmit(true);
        setAlert(true);
        setAlertMessage("Live Stream Uploaded!")
        return redirect("/");
      })
      .catch((er) => {
       // console.log(er);
        setAlert(true);
        setAlertMessage("Something Went Wrong. Try Again Later")
        setSubmit(true);
      });

    return null;
  };

  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const [url, setURL] = useState("");
  const [title, setTitle] = useState("");

  const handleURLChange = (e) => {
    setURL(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const VideoUploadAction = async () => {
    setSubmit(true);
    // console.log(url);
    // console.log(title);
    // console.log(selectedImage);

    const formData = new FormData();
    formData.append("url", url);
    formData.append("title", title);
    formData.append("image", selectedImage);

    await CustomeFetch.post("/admin/insertvideo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        //console.log("Upload successful", response.data);
        AddVideoModalHandler(false);
        setSubmit(true);
        setAlert(true);
        setAlertMessage("Video Uploaded Successfully")
        return redirect("/");
      })
      .catch((er) => {
        //console.log(er);
        setSubmit(true);
        setAlert(true);
        setAlertMessage("Something Went Wrong. Try Again Later");
      });
  };

  const [logoUpdateModal, setLogoUpdateModel] = useState(false);

  const handleLogoUpdateModel = (value) => {
    setLogoUpdateModel(value);
  };

  const [selectedLogo, setSelectedLogo] = useState(null);

  // Handle image file selection
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedLogo(file);
    }
  };

  const UploadLogoAction = async () => {
    setSubmit(true);
    const formData = new FormData();
    formData.append("logo", selectedLogo);

    await CustomeFetch.post("/admin/uploadlogo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
       // console.log("Upload successful", response.data);
        handleLogoUpdateModel(false);
        setSubmit(true);
        setAlert(true);
        setAlertMessage("Logo Updated Successfully!")
        return redirect("/");
      })
      .catch((er) => {
        //console.log(er);
        setAlert(true);
        setAlertMessage("Something Went Wrong. Try Again Later")
        setSubmit(true);
      });
  };

  const Logout = async () => {
    await CustomeFetch.get("/admin/logout")
      .then((res) => {
        localStorage.removeItem("auth");
        setLoggedin(false);
        setAlert(true);
        setAlertMessage("Admin Logged Out Successfully!")
        return null;
      })
      .catch((er) => {
        //console.log(er);
        setAlert(true);
        setAlertMessage("Something Went Wrong. Try Again Later")
      });
  };


  return (
    <DashboardContext.Provider
      value={{
        isPlaying,
        LiveStream,
        isLiveModal,
        isVideoModal,
        isLoginModal,
        LoginModalHandler,
        isSubmitting,
        LoginAction,
        handleEmail,
        handlePassword,
        AddLiveModalHandler,
        AddVideoModalHandler,
        handleImageChange,
        setSource,
        LiveVideoUploadAction,
        VideoUploadAction,
        handleURLChange,
        handleTitleChange,
        videos,
        setPlaying,
        PlayerHandler,
        logoUpdateModal,
        handleLogoUpdateModel,
        handleLogoChange,
        UploadLogoAction,
        bgImage,
        backgroundImage,
        isloggedin
      }}
    >
      {/* background-image: url("src/assets/images/banner-bk.png"); */}
      <Wrapper>

      {isAlert ? <AlertComponent message={alertMessage} setAlert={setAlert} /> : <></> }
        
      
        <div
          style={{
            backgroundImage: backgroundImage
              ? `url('${bgImage}')`
              // ? `url('')`
              : `url('assets/images/banner-bk.png')`,
          }}
          className="jumbotron "
          id="banner"
        >
   
          <header>
            <div className="row">
              <div className="col-2 header">
                <span style={{ color: "red", fontWeight: "900" }}>MASS</span>
                <LiveTvIcon
                  sx={{
                    fontSize: "32px",
                    transform: "rotate(-10deg)",
                    alignItems: "center",
                  }}
                />
              </div>
              <div className="col-2 align-center">
                {isloggedin ? (
                  <Button
                    color="error"
                    onClick={Logout}
                    sx={{
                      borderRadius: "25px",
                      "&:hover": {
                        backgroundColor: "#E44C4C",
                        color: "white",
                        border: "1px solidrgb(255, 255, 255)",
                      },
                    }}
                    variant="outlined"
                    size="small"
                  >
                    Log Out
                  </Button>
                ) : (
                  <Button
                    onClick={() => LoginModalHandler(true)}
                    sx={{
                      borderRadius: "25px",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                        color: "white",
                        border: "1px solid #B8BAB9",
                      },
                    }}
                    variant="outlined"
                    size="small"
                  >
                    Sign in
                  </Button>
                )}
              </div>
            </div>

            {isloggedin ? <AdminPanel /> : ""}
          </header>
          
            <div className={isloggedin ? 'mass' : 'mass isLoggedIn'}>MASS TV . CA</div>
            <Social />
          

          <LiveVideo />
        </div>
        <div className="live">
          <h5>Live TV</h5>
          <CircleIcon className="liveIcon" sx={{ color: "red" }} />
        </div>
      </Wrapper>
      <StoredVideoContainer />
      <PlayerModal isModalPlayer={isModalPlayer} localUrl={localUrl} />

      <Login />
      <AddLive />
      <AddVideo />
      <UpdateLogo />
      {/* <Footer /> */}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export const useModalContext = () => useContext(ModalContext);

export default Dashboard;
