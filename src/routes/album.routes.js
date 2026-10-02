import { Router } from "express";
import { getAlbumes, getAlbumById, getReviewsByAlbum } from "../controller/album.controller.js";

const router = Router();

router.get("/albumes", getAlbumes);
router.get("/albumes/:id", getAlbumById);
router.get("/albumes/:id/reviews", getReviewsByAlbum);

export default router;
