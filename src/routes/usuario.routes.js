import { Router } from "express";
import { getUsuarioById } from "../controller/usuario.controller.js";

const router = Router();

router.get("/usuarios/:id", getUsuarioById);

export default router;
