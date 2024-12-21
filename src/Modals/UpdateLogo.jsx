/* eslint-disable react/prop-types */

import Wrapper from "../assets/Wrapper/AddVideo";
import { useDashboardContext } from "../Pages/Dashboard";

const UpdateLogo = () => {
  const {
    logoUpdateModal,
    handleLogoUpdateModel,
    handleLogoChange,
    isSubmitting,
    UploadLogoAction,
    bgImage,
    backgroundImage
  } = useDashboardContext();
  if (!logoUpdateModal) return null;

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
          handleLogoUpdateModel(false);
        }}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="close-button"
            onClick={() => {
              handleLogoUpdateModel(false);
            }}
          >
            X
          </button>
          <h2>Update Logo</h2>
          <div className="Form">
            <div className="FormRow">
              <label htmlFor="logo">Upload Logo</label>
              <input
                type="file"
                onChange={handleLogoChange}
                name="logo"
                id="logo"
                accept="image/*"
                multiple={false}
              />
            </div>
            <button
              onClick={UploadLogoAction}
              disabled={isSubmitting}
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

export default UpdateLogo;
