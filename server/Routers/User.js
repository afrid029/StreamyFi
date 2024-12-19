
import { Router } from "express";
import { Login } from "../Controllers/UserController.js";

const router = Router();

router.post('/',Login);

export default router;