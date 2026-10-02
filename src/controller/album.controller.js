import { Album } from "../models/album.js";

export const getAlbumes = async (req, res) => {
  try {
    const albumes = await Album.findAll();
    return res.json(albumes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAlbumById = async (req, res) => {
  try {
    const id = req.params.id;
    const album = await Album.findByPk(id);
    if (!album) {
      return res.status(404).json({ error: "Álbum no encontrado" });
    }
    return res.json(album);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
