import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// Las mismas reglas que la app: calificacion de 0 a 5 y comentario de hasta 500 caracteres
export const Review = sequelize.define("reviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  calificacion: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 0, max: 5 } },
  comentario: { type: DataTypes.STRING(500), allowNull: true },
  fechaEscucha: { type: DataTypes.DATEONLY, allowNull: true },
  usuarioId: { type: DataTypes.INTEGER, allowNull: false, references: { model: "usuarios", key: "id" } },
  albumId: { type: DataTypes.INTEGER, allowNull: false, references: { model: "albumes", key: "id" } },
});
