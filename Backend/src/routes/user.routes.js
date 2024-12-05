import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, getCurrentUser, verifyOtp, resendOtpVerificationCode, getAllUser, verifyUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
  ]),
  registerUser
) //called from app.js


router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/verifyOtp").post(verifyOtp)
router.route("/resendOtpVerificationCode").post(resendOtpVerificationCode)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/verify").post(verifyUser)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route('/all-users').get(getAllUser); // Route to get all users

export default router