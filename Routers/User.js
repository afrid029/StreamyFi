// import { Router } from "express";
// import {
//   DeleteVideo,
//   InsertVideo,
//   Login,
//   Logout,
//   updateVideo,
//   LiveVideo,
//   LogoUpload,
//   checkuser
// } from "../Controllers/UserController.js";
// import { isAdminAction } from "../Middleware/adminAuth.js";
// import { upload, upload2 } from "../Middleware/multermiddleware.js";

// const router = Router();

// router.post("/login", Login);
// router.get("/checkuser", isAdminAction, checkuser);
// router.post("/loadlive", isAdminAction, LiveVideo);
// router.post("/uploadlogo", upload.single("logo"), isAdminAction, LogoUpload);
// router.post("/insertvideo", upload.single("image"), isAdminAction, InsertVideo);
// router.patch("/updatevideo", isAdminAction, updateVideo);
// router.delete("/deletevideo", isAdminAction, DeleteVideo);
// router.get("/logout", Logout);

// export default router;


const express = require("express");
const {
  DeleteVideo,
  InsertVideo,
  Login,
  Logout,
  updateVideo,
  LiveVideo,
  LogoUpload,
  checkuser
} = require("../Controllers/UserController.js");
const { isAdminAction } = require("../Middleware/adminAuth.js");
const { upload, upload2 } = require("../Middleware/multermiddleware.js");

const router = express.Router();

router.post("/login", Login);
router.get("/checkuser", isAdminAction, checkuser);
router.post("/loadlive", isAdminAction, LiveVideo);
router.post("/uploadlogo", upload.single("logo"), isAdminAction, LogoUpload);
router.post("/insertvideo", upload.single("image"), isAdminAction, InsertVideo);
router.patch("/updatevideo", isAdminAction, updateVideo);
router.delete("/deletevideo/:ID", isAdminAction, DeleteVideo);
router.get("/logout", Logout);

// Export router using CommonJS
module.exports = router;