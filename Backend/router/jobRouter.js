import express from "express"
import { getAllJobs ,postJob ,getSingleJob ,deleteJob , updateJob , getMyJobs } from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router  =express.Router();
router.get("/getall",getAllJobs);
router.get("/postall",isAuthenticated,postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;