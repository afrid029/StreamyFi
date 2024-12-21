
import { Router } from "express";
import { DeleteVideo, InsertVideo, Login, Logout, updateVideo } from "../Controllers/UserController.js";
import { isAdminAction } from "../Middleware/adminAuth.js";

const router = Router();

router.post('/login',Login);
router.post('/insertvideo',isAdminAction, InsertVideo);
router.patch('/updatevideo',isAdminAction, updateVideo);
router.delete('/deletevideo',isAdminAction, DeleteVideo);
router.get('/logout', Logout)

export default router;