import { Usuario } from "./usuario.js";
import { Album } from "./album.js";
import { Review } from "./review.js";

// Un usuario escribe muchas resenas y un album recibe muchas; cada resena es de un solo usuario y
// de un solo album. El alias (as) es el nombre con el que llega el include en el JSON, y con
// cascade al borrar un usuario o un album se borran sus resenas
export function setupRelations() {
  Usuario.hasMany(Review, { foreignKey: "usuarioId", as: "reviewsUsuario", onDelete: "cascade", hooks: true });
  Review.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

  Album.hasMany(Review, { foreignKey: "albumId", as: "reviewsAlbum", onDelete: "cascade", hooks: true });
  Review.belongsTo(Album, { foreignKey: "albumId", as: "album" });
}
