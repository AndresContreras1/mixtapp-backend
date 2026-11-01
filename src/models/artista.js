import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// Solo lectura, como las canciones. grupo es la banda del artista, o null si es solista
export const Artista = sequelize.define("artistas", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  grupo: { type: DataTypes.STRING, allowNull: true },
  genero: { type: DataTypes.STRING, allowNull: false },
  subgenero: { type: DataTypes.STRING, allowNull: true },
  fotoUrl: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
  datosCuriosos: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false, defaultValue: [] },
  tendencia: { type: DataTypes.INTEGER, allowNull: true },
});
