import { Usuario } from "./usuario.js";
import { Album } from "./album.js";
import { Review } from "./review.js";

export function setupRelations() {
  Usuario.hasMany(Review, { foreignKey: "usuarioId", as: "reviewsUsuario", onDelete: "cascade", hooks: true });
  Review.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

  Album.hasMany(Review, { foreignKey: "albumId", as: "reviewsAlbum", onDelete: "cascade", hooks: true });
  Review.belongsTo(Album, { foreignKey: "albumId", as: "album" });
}
