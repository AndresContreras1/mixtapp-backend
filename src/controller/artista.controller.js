import { Artista } from "../models/artista.js";

export const getArtistas = async (req, res) => {
  try {
    const artistas = await Artista.findAll();
    return res.json(artistas);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getArtistaById = async (req, res) => {
  try {
    const id = req.params.id;
    const artista = await Artista.findByPk(id);
    if (!artista) {
      return res.status(404).json({ error: "Artista no encontrado" });
    }
    return res.json(artista);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
