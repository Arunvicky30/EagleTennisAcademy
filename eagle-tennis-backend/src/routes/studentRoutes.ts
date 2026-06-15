import { Router } from "express";
import {
	createStudent,
	deleteStudent,
	getStudents,
	updateStudent,
} from "../controllers/studentController";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", getStudents);
router.post("/", upload.single("photo_file"), createStudent);
router.put("/:id", upload.single("photo_file"), updateStudent);
router.delete("/:id", deleteStudent);

export default router;