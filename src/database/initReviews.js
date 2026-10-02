import { Review } from "../models/review.js";

const initialReviews = [
  {
    calificacion: 4,
    comentario: "From Zero strikes an impressive balance between heavy nostalgia and genuine reinvention. Instead of trying to duplicate their past, the band leverages their signature aggressive riffs and electronic textures to build a fierce, modern soundscape. Emily Armstrong delivers a standout vocal performance that commands every track with raw power, signaling a bold, confident new chapter for Linkin Park.",
    usuarioId: 1,
    albumId: 4,
  },
  {
    calificacion: 4,
    comentario: "RUSH! is an infectious, high-octane pop-rock spectacle built for global arenas. Trading some of their raw Italian grit for polished dance-punk grooves and razor-sharp riffs, Måneskin delivers pure, unapologetic attitude and addictive energy from start to finish.",
    usuarioId: 1,
    albumId: 2,
  },
  {
    calificacion: 5,
    comentario: "Teatro d'ira: Vol. I is a raw, electric burst of modern hard rock that captures Måneskin at their absolute peak. Driven by razor-sharp riffs, explosive live energy, and Damiano David’s theatrical vocals, it turns pure attitude and emotional drama into a tight, unforgettable masterpiece.",
    usuarioId: 2,
    albumId: 1,
  },
  {
    calificacion: 4,
    comentario: "Finisterra is Mago de Oz’s ambitious folk metal masterpiece. By blending power metal riffs with Celtic flutes and violins, it turns an epic medieval concept into an endlessly creative, legendary album.",
    usuarioId: 3,
    albumId: 3,
  },
  {
    calificacion: 5,
    comentario: "A loud, dramatic favorite that still feels alive on every listen.",
    usuarioId: 2,
    albumId: 8,
  },
];

export async function loadInitialReviews() {
  try {
    const count = await Review.count();
    if (count === 0) {
      await Review.bulkCreate(initialReviews);
      console.log("Initial reviews loaded");
    }
  } catch (error) {
    console.log(error);
  }
}
