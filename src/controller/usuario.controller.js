import { Usuario } from "../models/usuario.js";
import { Review } from "../models/review.js";
import { Album } from "../models/album.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  } catch (error) {
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
      include: [
        {
          model: Album,
          as: "album",
          attributes: ["id", "titulo", "artista", "portadaUrl"],
        },
        {
          model: Usuario,
          as: "usuario",
          attributes: ["id", "nombre", "fotoUrl"],
        },
      ],
      order: [
        ["createdAt", "DESC"],
        ["id", "DESC"],
      ],
    });

    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
