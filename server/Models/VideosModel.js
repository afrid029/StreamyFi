import mongoose from "mongoose";
import VideoType from "../Constents/VideoType.js";

const VideoSchema = mongoose.Schema({
    title:String,
    url: String,
    videotype: {
        type:String,
        enum: Object.values(VideoType)
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

export default mongoose.model('Video', VideoSchema)