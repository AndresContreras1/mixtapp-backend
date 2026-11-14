import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Album = sequelize.define("albumes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING, allowNull: false },
  portadaUrl: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
  anio: { type: DataTypes.INTEGER, allowNull: false },
  // AAAA-MM-DD; null si el album no esta en el catalogo de la app
  fechaLanzamiento: { type: DataTypes.DATEONLY, allowNull: true },
  genero: { type: DataTypes.STRING, allowNull: false },
  // Puesto en el Top Colombia de Deezer; null si no esta en esa lista
  tendenciaColombia: { type: DataTypes.INTEGER, allowNull: true },
});
