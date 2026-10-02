import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Album = sequelize.define("albumes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING, allowNull: false },
  portadaUrl: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
  anio: { type: DataTypes.INTEGER, allowNull: false },
  genero: { type: DataTypes.STRING, allowNull: false },
});
