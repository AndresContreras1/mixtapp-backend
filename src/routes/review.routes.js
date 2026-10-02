import { Router } from "express";
import { createReview, updateReview, deleteReview } from "../controller/review.controller.js";

const router = Router();

router.post("/reviews", createReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

export default router;
