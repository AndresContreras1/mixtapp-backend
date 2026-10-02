import app from "./app.js";
import { sequelize } from "./database/database.js";

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida");

    app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
  } catch (error) {
    console.error("Error al iniciar:", error);
  }
}

init();
