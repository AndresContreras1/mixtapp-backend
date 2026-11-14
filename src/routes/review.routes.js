import { Router } from "express";
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from "../controller/review.controller.js";

// El CRUD de las resenas: leer todas o una, crear, modificar y eliminar
const router = Router();

router.get("/reviews", getReviews);
router.get("/reviews/:id", getReviewById);
router.post("/reviews", createReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

export default router;
