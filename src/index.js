import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialUsuarios } from "./database/initUsuarios.js";
import { loadInitialAlbumes } from "./database/initAlbumes.js";
import { loadInitialReviews } from "./database/initReviews.js";
import { loadInitialCanciones } from "./database/initCanciones.js";
import { loadInitialArtistas } from "./database/initArtistas.js";
import { setupRelations } from "./models/relations.js";
import "./models/usuario.js";
import "./models/album.js";
import "./models/review.js";
import "./models/cancion.js";
import "./models/artista.js";

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida");

    // Sin force: true las tablas y lo que se crea desde la app se conservan al reiniciar
    await sequelize.sync();

    setupRelations();

    await loadInitialUsuarios();
    await loadInitialAlbumes();
    await loadInitialReviews();
    await loadInitialCanciones();
    await loadInitialArtistas();

    app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
  } catch (error) {
    console.error("Error al iniciar:", error);
  }
}

init();
