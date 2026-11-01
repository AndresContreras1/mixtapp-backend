import { Router } from "express";
import { getCanciones, getCancionById } from "../controller/cancion.controller.js";

const router = Router();

router.get("/canciones", getCanciones);
router.get("/canciones/:id", getCancionById);

export default router;
