/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import Wrapper from "../assets/Wrapper/AddVideo";


const AddVideo = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    const test = () => {
        console.log("Test button clicked");
        onClose();
    }

    return (
        <Wrapper>
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Add Video</h2>
                <Form action="post" className="Form">
                    <div className="FormRow">
                        <label htmlFor="url">Paste Video URL Here</label>
                        <input type="url" name="url" id="url" />
                    </div>
                    <div className="FormRow">
                        <label htmlFor="title">Title of the Video</label>
                        <input type="name" name="title" id="title" />
                    </div>

                    <button onClick={test} className="upload"> Upload </button>
                    
                </Form>
                
            </div>
        </div>
        </Wrapper>
    )

}

export default AddVideo;