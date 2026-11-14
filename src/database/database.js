import { Sequelize } from "sequelize";

// La conexion a la base mixtapp de PostgreSQL en el puerto 5432; la usan todos los modelos
export const sequelize = new Sequelize("mixtapp", "postgres", "password", {
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});
