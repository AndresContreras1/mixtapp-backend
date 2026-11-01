import { Cancion } from "../models/cancion.js";

export const getCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.findAll();
    return res.json(canciones);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCancionById = async (req, res) => {
  try {
    const id = req.params.id;
    const cancion = await Cancion.findByPk(id);
    if (!cancion) {
      return res.status(404).json({ error: "Canción no encontrada" });
    }
    return res.json(cancion);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
