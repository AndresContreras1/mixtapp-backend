import { Review } from "../models/review.js";
import { Usuario } from "../models/usuario.js";
import { Album } from "../models/album.js";

// La calificacion va de 0 a 5. Se revisa antes de guardar para responder 400 con el motivo
function calificacionInvalida(calificacion) {
  return calificacion !== undefined && (calificacion < 0 || calificacion > 5);
}

// Todas las resenas con su usuario, de la mas nueva a la mas vieja. Si dos tienen la misma fecha,
// el id decide, asi el orden no cambia entre una peticion y otra
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: {
        model: Usuario,
        as: "usuario",
        attributes: ["id", "nombre", "fotoUrl"],
      },
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

export const getReviewById = async (req, res) => {
  try {
    const id = req.params.id;
    // El usuario y el album salen en la misma consulta con include: asi la app no hace una
    // segunda peticion para traer el album
    const review = await Review.findByPk(id, {
      include: [
        {
          model: Usuario,
          as: "usuario",
          attributes: ["id", "nombre", "fotoUrl"],
        },
        {
          model: Album,
          as: "album",
          attributes: ["id", "titulo", "artista", "portadaUrl"],
        },
      ],
    });
    if (!review) {
      return res.status(404).json({ error: "Review no encontrada" });
    }
    return res.json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Antes de crear se comprueba que el usuario y el album existan y que la calificacion sea valida
export const createReview = async (req, res) => {
  try {
    const { usuarioId, albumId, calificacion } = req.body;

    if (calificacionInvalida(calificacion)) {
      return res.status(400).json({ error: "La calificación va de 0 a 5" });
    }

    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const album = await Album.findByPk(albumId);
    if (!album) {
      return res.status(404).json({ error: "Álbum no encontrado" });
    }

    const newReview = await Review.create(req.body);
    return res.json(newReview);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Solo cambia lo que llega en el body: calificacion, comentario o fecha de escucha
export const updateReview = async (req, res) => {
  try {
    const id = req.params.id;

    if (calificacionInvalida(req.body.calificacion)) {
      return res.status(400).json({ error: "La calificación va de 0 a 5" });
    }

    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Review no encontrada" });
    }
    await review.update(req.body);
    return res.json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Responde un JSON y no un 204 vacio: con el 204 sin cuerpo, Retrofit falla en la app
export const deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Review no encontrada" });
    }
    await review.destroy();
    return res.json({ message: "Review eliminada" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
