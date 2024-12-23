/* eslint-disable react/prop-types */

import { useState } from "react";
import Wrapper from "../assets/Wrapper/AddVideo";
import { useDashboardContext } from "../Pages/Dashboard";

const AddLive = () => {
  const {
    isLiveModal,
    AddLiveModalHandler,
    LiveVideoUploadAction,
    setSource,
    isSubmitting,
    bgImage,
    backgroundImage,
  } = useDashboardContext();
  if (!isLiveModal) return null;

  //console.log(bgImage);

  const [emptyStreamHandler, setEmptyStreamHandler] = useState(true);
  
    const streamHandler = (e) => {
     
      if (e.target.value.length > 0 && e.target.value.endsWith('m3u8')) {
        //console.log(e.target.value.length);
        setSource(e.target.value)
        setEmptyStreamHandler(false);
        
      }else {
        setEmptyStreamHandler(true);
      }
      
    }

  return (
    <Wrapper>
      <div
        className="modal-overlay"
        style={{
          backgroundImage: backgroundImage
            ? `url('../server/${bgImage}')`
            : `url('/src/assets/images/banner-bk.png')`,
        }}
        onClick={() => {
          AddLiveModalHandler(false);
        }}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="close-button"
            onClick={() => AddLiveModalHandler(false)}
          >
            X
          </button>
          <h2>Update Live Stream</h2>
          <div className="Form">
            <div className="FormRow">
              <label htmlFor="url">Paste Live Stream URL Here (.m3u8)</label>
              <input
                onChange={(e) => streamHandler(e)}
                type="url"
                name="url"
                id="url"
              />
            </div>

            <button
              onClick={LiveVideoUploadAction}
              disabled={isSubmitting || emptyStreamHandler}
              className="upload"
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

export default AddLive;
