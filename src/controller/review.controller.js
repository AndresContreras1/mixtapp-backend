import { Review } from "../models/review.js";
import { Usuario } from "../models/usuario.js";
import { Album } from "../models/album.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: {
        model: Usuario,
        as: "usuario",
        attributes: ["id", "nombre", "fotoUrl"],
      },
      order: [["createdAt", "DESC"]],
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

export const createReview = async (req, res) => {
  try {
    const { usuarioId, albumId } = req.body;

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

export const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
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
