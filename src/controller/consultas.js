import { Usuario } from "../models/usuario.js";
import { Album } from "../models/album.js";

// Partes de las consultas de resenas que se repiten en varios controladores

// El usuario que escribio la resena, anidado como "usuario" y solo con lo que la app muestra
export const incluirUsuario = {
  model: Usuario,
  as: "usuario",
  attributes: ["id", "nombre", "fotoUrl"],
};

// El album de la resena, anidado como "album" y solo con lo que la app muestra
export const incluirAlbum = {
  model: Album,
  as: "album",
  attributes: ["id", "titulo", "artista", "portadaUrl"],
};

// De la mas nueva a la mas vieja. Si dos tienen la misma fecha, el id decide, asi el orden no
// cambia entre una peticion y otra
export const ordenMasNuevas = [
  ["createdAt", "DESC"],
  ["id", "DESC"],
];
