import mongoose from "mongoose";

const UserScheme = mongoose.Schema({
    email: String,
    password: String
})

export default mongoose.model('User', UserScheme);