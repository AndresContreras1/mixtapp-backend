import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define("reviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  calificacion: { type: DataTypes.INTEGER, allowNull: false },
  comentario: { type: DataTypes.STRING(1000), allowNull: true },
  usuarioId: { type: DataTypes.INTEGER, allowNull: false, references: { model: "usuarios", key: "id" } },
  albumId: { type: DataTypes.INTEGER, allowNull: false, references: { model: "albumes", key: "id" } },
});
