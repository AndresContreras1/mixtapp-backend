import { Router } from "express";
import { getUsuarios, getUsuarioById, getReviewsByUsuario } from "../controller/usuario.controller.js";

// Rutas de solo lectura de los usuarios y de las resenas de cada usuario
const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.get("/usuarios/:id/reviews", getReviewsByUsuario);

export default router;
