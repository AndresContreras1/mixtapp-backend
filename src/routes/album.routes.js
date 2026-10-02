import { Router } from "express";
import { getAlbumes, getAlbumById } from "../controller/album.controller.js";

const router = Router();

router.get("/albumes", getAlbumes);
router.get("/albumes/:id", getAlbumById);

export default router;
