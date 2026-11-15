import { Album } from "../models/album.js";
import { Review } from "../models/review.js";
import { incluirUsuario, ordenMasNuevas } from "./consultas.js";

// Todos los albumes
export const getAlbumes = async (req, res) => {
  try {
    const albumes = await Album.findAll();
    return res.json(albumes);
  } catch (error) {
    console.error("Error en getAlbumes:", error);
    return res.status(500).json({ error: error.message });
  }
};

// El detalle de un album por id, o 404 si no existe
export const getAlbumById = async (req, res) => {
  try {
    const id = req.params.id;
    const album = await Album.findByPk(id);
    if (!album) {
      return res.status(404).json({ error: "Álbum no encontrado" });
    }
    return res.json(album);
  } catch (error) {
    console.error("Error en getAlbumById:", error);
    return res.status(500).json({ error: error.message });
  }
};

// Las resenas de un album con el usuario de cada una, de la mas nueva a la mas vieja
export const getReviewsByAlbum = async (req, res) => {
  const { id } = req.params;

  try {
    const album = await Album.findByPk(id);
    if (!album) {
      return res.status(404).json({ error: "Álbum no encontrado" });
    }

    const reviews = await Review.findAll({
      where: {
        albumId: id,
      },
      include: incluirUsuario,
      order: ordenMasNuevas,
    });

    return res.json(reviews);
  } catch (error) {
    console.error("Error en getReviewsByAlbum:", error);
    return res.status(500).json({ error: error.message });
  }
};
