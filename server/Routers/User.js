
import { Router } from "express";
import { DeleteVideo, InsertVideo, Login, Logout, updateVideo, LiveVideo } from "../Controllers/UserController.js";
import { isAdminAction } from "../Middleware/adminAuth.js";
import upload from "../Middleware/multermiddleware.js";


const router = Router();

router.post('/login',Login);
router.post('/loadlive',LiveVideo);
router.post('/insertvideo', upload.single("image"),isAdminAction, InsertVideo);
router.patch('/updatevideo',isAdminAction, updateVideo);
router.delete('/deletevideo',isAdminAction, DeleteVideo);
router.get('/logout', Logout)

export default router;