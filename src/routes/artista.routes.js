import { Router } from "express";
import { getArtistas, getArtistaById } from "../controller/artista.controller.js";

const router = Router();

router.get("/artistas", getArtistas);
router.get("/artistas/:id", getArtistaById);

export default router;
