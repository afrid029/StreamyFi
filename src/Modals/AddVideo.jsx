/* eslint-disable react/prop-types */

import Wrapper from "../assets/Wrapper/AddVideo";
import { useDashboardContext } from "../Pages/Dashboard";

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
    backgroundImage
  } = useDashboardContext();
  if (!isVideoModal) return null;

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
              <label htmlFor="url">Paste Video URL Here</label>
              <input
                type="url"
                onChange={handleURLChange}
                name="url"
                id="url"
              />
            </div>
            <div className="FormRow">
              <label htmlFor="title">Title of the Video</label>
              <input
                type="name"
                onChange={handleTitleChange}
                name="title"
                id="title"
              />
            </div>
            <div className="FormRow">
              <label htmlFor="image">Upload Thumbnail</label>
              <input
                type="file"
                onChange={handleImageChange}
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
              />
            </div>

            <button
              onClick={VideoUploadAction}
              className="upload"
              disabled={isSubmitting}
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
