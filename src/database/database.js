import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mixtapp", "postgres", "password", {
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});
