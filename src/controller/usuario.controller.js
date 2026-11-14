import { Usuario } from "../models/usuario.js";
import { Review } from "../models/review.js";
import { incluirUsuario, incluirAlbum, ordenMasNuevas } from "./consultas.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  } catch (error) {
    console.error("Error en getUsuarios:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    return res.json(usuario);
  } catch (error) {
    console.error("Error en getUsuarioById:", error);
    return res.status(500).json({ error: error.message });
  }
};

// Las resenas de un usuario con el album y el usuario de cada una: la app arma la tarjeta
// completa con una sola peticion
export const getReviewsByUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const reviews = await Review.findAll({
      where: {
        usuarioId: id,
      },
      include: [incluirAlbum, incluirUsuario],
      order: ordenMasNuevas,
    });

    return res.json(reviews);
  } catch (error) {
    console.error("Error en getReviewsByUsuario:", error);
    return res.status(500).json({ error: error.message });
  }
};
