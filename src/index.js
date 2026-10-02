import app from "./app.js";
import { sequelize } from "./database/database.js";
import { setupRelations } from "./models/relations.js";
import "./models/usuario.js";
import "./models/album.js";
import "./models/review.js";

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida");

    await sequelize.sync({ force: true }); // borra y recrea las tablas en cada arranque (solo desarrollo)

    setupRelations();

    app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
  } catch (error) {
    console.error("Error al iniciar:", error);
  }
}

init();
