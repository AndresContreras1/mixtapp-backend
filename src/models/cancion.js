import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// Solo lectura: la app las muestra y las califica en Firestore. album es el nombre del album,
// como texto, porque no todos los albumes de las canciones estan en la tabla albumes
export const Cancion = sequelize.define("canciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  album: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING, allowNull: false },
  anio: { type: DataTypes.INTEGER, allowNull: false },
  genero: { type: DataTypes.STRING, allowNull: false },
  subgenero: { type: DataTypes.STRING, allowNull: true },
  portadaUrl: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
  // Una lista de textos cortos: en PostgreSQL es un arreglo
  datosCuriosos: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false, defaultValue: [] },
  // Posicion en el Top Colombia; null si no esta en el top
  tendencia: { type: DataTypes.INTEGER, allowNull: true },
});
