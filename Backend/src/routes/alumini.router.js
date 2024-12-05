import { Router } from "express";
import { handleAllAlumni, handleAddAlumni } from "../controllers/alumini.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/all").get(handleAllAlumni);


router.route("/add").post(
  // verifyJWT, 
  upload.fields([    
    { name: "profile", maxCount: 1 }, 
    { name: "coverImage", maxCount: 1 } 
  ]),
  handleAddAlumni
);

export default router;
