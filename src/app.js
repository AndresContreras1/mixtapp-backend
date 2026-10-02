import express from "express";
import usuarioRoutes from "./routes/usuario.routes.js";
import albumRoutes from "./routes/album.routes.js";

const app = express();

app.use(express.json());

app.use(usuarioRoutes);
app.use(albumRoutes);

export default app;
