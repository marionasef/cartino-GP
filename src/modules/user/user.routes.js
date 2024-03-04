import { Router } from "express";
const router =Router()
import * as uc from "./user.controller.js"

router.post("/signup",uc.signup)
router.post("/login",uc.login)

export default router