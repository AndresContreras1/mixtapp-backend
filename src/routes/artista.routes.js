import { Router } from "express";
import { getArtistas, getArtistaById } from "../controller/artista.controller.js";

// Rutas de solo lectura de los artistas del catalogo
const router = Router();

router.get("/artistas", getArtistas);
router.get("/artistas/:id", getArtistaById);

export default router;
