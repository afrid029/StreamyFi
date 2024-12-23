/* eslint-disable react/prop-types */

import { useState } from "react";
import Wrapper from "../assets/Wrapper/AddVideo";
import { useDashboardContext } from "../Pages/Dashboard";
import AlertComponent from "../Components/AlertComponent";

const AddVideo = () => {
  const {
    isVideoModal,
    AddVideoModalHandler,
    handleImageChange,
    isSubmitting,
    handleURLChange,
    handleTitleChange,
    VideoUploadAction,
    bgImage,
    backgroundImage,
  } = useDashboardContext();
  if (!isVideoModal) return null;

  const [emptyTitleHandler, setEmptyTitleHandler] = useState(true);
  const [emptyURLHandler, setEmptyURLHandler] = useState(true);
  const [emptyImageHandler, setEmptyImageHandler] = useState(true);
  const [isAlert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const tileHandler = (e) => {
    if (e.target.value.length > 0) {
      //console.log(e.target.value.length);
      setEmptyTitleHandler(false);
    } else {
      setEmptyTitleHandler(true);
    }
  };

  const urlHandler = (e) => {
    if (e.target.value.length > 0) {
      setEmptyURLHandler(false)
      // // if (vimatch || ytmatch) {
      // //   setEmptyURLHandler(false);
      // // } else {
      // //   setEmptyURLHandler(true);
      // //   setAlert(true);
      // //   setAlertMessage("Link Format Is Not Supported");
      // }
    } else {
      setEmptyURLHandler(true);
    }
  };

  const imageHandler = (e) => {
   
    if (e.target.value.length > 0) {
      
      setEmptyImageHandler(false);
    } else {
      setEmptyImageHandler(true);
    }
  };

  return (
    <Wrapper>
      {isAlert ? (
        <AlertComponent message={alertMessage} setAlert={setAlert} />
      ) : (
        <></>
      )}
      <div
        className="modal-overlay"
        style={{
          backgroundImage: backgroundImage
            ? `url('../server/${bgImage}')`
            : `url('/src/assets/images/banner-bk.png')`,
        }}
        onClick={() => {
          AddVideoModalHandler(false);
        }}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="close-button"
            onClick={() => {
              AddVideoModalHandler(false);
            }}
          >
            X
          </button>
          <h2>Add Video</h2>
          <div className="Form">
            <div className="FormRow">
              <label htmlFor="url">Paste Video URL Here (Youtube/Vimeo)</label>
              <input
                type="url"
                onChange={(e) => {
                  urlHandler(e);
                  handleURLChange(e);
                }}
                name="url"
                id="url"
              />
            </div>
            <div className="FormRow">
              <label htmlFor="title">Title of the Video</label>
              <input
                type="name"
                onChange={(e) => {
                  tileHandler(e);
                  handleTitleChange(e);
                }}
                name="title"
                id="title"
              />
            </div>
            <div className="FormRow">
              <label htmlFor="image">Upload Thumbnail</label>
              <input
                type="file"
                onChange={(e) => {
                  imageHandler(e)
                  handleImageChange(e);
                }}
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
              />
            </div>

            <button
              onClick={VideoUploadAction}
              className="upload"
              disabled={
                isSubmitting ||
                emptyTitleHandler ||
                emptyURLHandler ||
                emptyImageHandler
              }
            >
              {" "}
              {isSubmitting ? "Uploading..." : "Upload"}{" "}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddVideo;
