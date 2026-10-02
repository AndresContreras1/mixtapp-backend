import { Router } from "express";
import { getUsuarioById, getReviewsByUsuario } from "../controller/usuario.controller.js";

const router = Router();

router.get("/usuarios/:id", getUsuarioById);
router.get("/usuarios/:id/reviews", getReviewsByUsuario);

export default router;
