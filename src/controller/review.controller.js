import { Review } from "../models/review.js";
import { Usuario } from "../models/usuario.js";
import { Album } from "../models/album.js";
import { incluirUsuario, incluirAlbum, ordenMasNuevas } from "./consultas.js";

// Se revisa antes de guardar para responder 400 con el motivo y no un 500: que la calificacion
// llegue y vaya de 0 a 5, y que el comentario no pase de 500 caracteres. Al crear la calificacion
// es obligatoria; al modificar puede no llegar y se queda la que estaba, pero no puede llegar nula.
// Devuelve el motivo del error, o null si todo esta bien
function errorEnReview(calificacion, comentario, calificacionObligatoria) {
  if (calificacion === null || (calificacionObligatoria && calificacion === undefined)) {
    return "La calificación es obligatoria";
  }
  if (calificacion !== undefined && (calificacion < 0 || calificacion > 5)) {
    return "La calificación va de 0 a 5";
  }
  if (comentario !== undefined && comentario !== null && comentario.length > 500) {
    return "El comentario va hasta 500 caracteres";
  }
  return null;
}

// Todas las resenas con su usuario, de la mas nueva a la mas vieja
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: incluirUsuario,
      order: ordenMasNuevas,
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
      include: [incluirUsuario, incluirAlbum],
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
    const { usuarioId, albumId, calificacion, comentario } = req.body;

    const motivo = errorEnReview(calificacion, comentario, true);
    if (motivo) {
      return res.status(400).json({ error: motivo });
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

// Solo cambia calificacion, comentario o fecha de escucha, y de esos solo los que lleguen en el body.
// usuarioId y albumId no se toman del body: una resena no cambia de usuario ni de album
export const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    const { calificacion, comentario, fechaEscucha } = req.body;

    const motivo = errorEnReview(calificacion, comentario, false);
    if (motivo) {
      return res.status(400).json({ error: motivo });
    }

    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Review no encontrada" });
    }
    // Sequelize no toca los campos que quedan en undefined porque no llegaron
    await review.update({ calificacion, comentario, fechaEscucha });
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
