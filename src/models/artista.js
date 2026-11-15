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
  // El usuario de Instagram sin la @: el de su banda si es integrante; null si no tiene
  instagram: { type: DataTypes.STRING, allowNull: true },
  // Los mismos parrafos de las canciones: cada texto es un STRING(1000), porque pasan de 255
  datosCuriosos: { type: DataTypes.ARRAY(DataTypes.STRING(1000)), allowNull: false, defaultValue: [] },
  // Puesto en la lista de Deezer de su genero; null si no esta en la lista
  tendencia: { type: DataTypes.INTEGER, allowNull: true },
  // Puesto en el Top Colombia de Deezer; null si no esta en esa lista
  tendenciaColombia: { type: DataTypes.INTEGER, allowNull: true },
});
