import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define("usuarios", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  fotoUrl: { type: DataTypes.STRING, allowNull: true },
});