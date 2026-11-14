import { Router } from "express";
import { getAlbumes, getAlbumById, getReviewsByAlbum } from "../controller/album.controller.js";

// Rutas de solo lectura de los albumes y de las resenas de cada album
const router = Router();

router.get("/albumes", getAlbumes);
router.get("/albumes/:id", getAlbumById);
router.get("/albumes/:id/reviews", getReviewsByAlbum);

export default router;
