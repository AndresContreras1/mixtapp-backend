import { Usuario } from "../models/usuario.js";

export const getUsuarioById = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
