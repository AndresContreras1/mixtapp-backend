import { Cancion } from "../models/cancion.js";

// Todas las canciones del catalogo
export const getCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.findAll();
    return res.json(canciones);
  } catch (error) {
    console.error("Error en getCanciones:", error);
    return res.status(500).json({ error: error.message });
  }
};

// Una cancion por id, o 404 si no existe
export const getCancionById = async (req, res) => {
  try {
    const id = req.params.id;
    const cancion = await Cancion.findByPk(id);
    if (!cancion) {
      return res.status(404).json({ error: "Canción no encontrada" });
    }
    return res.json(cancion);
  } catch (error) {
    console.error("Error en getCancionById:", error);
    return res.status(500).json({ error: error.message });
  }
};
