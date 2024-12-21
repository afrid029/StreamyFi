/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import Wrapper from "../assets/Wrapper/AddVideo";
import { useDashboardContext } from "../Pages/Dashboard";


const AddLive = () => {
    const { isLiveModal, AddLiveModalHandler, LiveVideoUploadAction, setSource, isSubmitting} = useDashboardContext();
    if (!isLiveModal) return null;

    return (
        <Wrapper>
            <div className="modal-overlay" onClick={() => {AddLiveModalHandler(false)}}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => AddLiveModalHandler(false)}>X</button>
                <h2>Update Live Stream</h2>
                <div className="Form">
                    <div className="FormRow">
                        <label htmlFor="url">Paste Live Stream URL Here (.m3u8)</label>
                        <input onChange={(e) => setSource(e.target.value)} type="url" name="url" id="url" />
                    </div>

                    <button onClick={LiveVideoUploadAction} disabled={isSubmitting} className="upload"> {isSubmitting ? 'Uploading...' : 'Upload'} </button>
                    
                </div>
                
            </div>
        </div>
        </Wrapper>
    )

}

export default AddLive;