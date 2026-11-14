import { Router } from "express";
import { getCanciones, getCancionById } from "../controller/cancion.controller.js";

// Rutas de solo lectura de las canciones del catalogo
const router = Router();

router.get("/canciones", getCanciones);
router.get("/canciones/:id", getCancionById);

export default router;
