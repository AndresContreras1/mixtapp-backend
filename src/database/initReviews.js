import { Review } from "../models/review.js";

const initialReviews = [
  {
    calificacion: 4,
    comentario: "From Zero strikes an impressive balance between heavy nostalgia and genuine reinvention. Instead of trying to duplicate their past, the band leverages their signature aggressive riffs and electronic textures to build a fierce, modern soundscape. Emily Armstrong delivers a standout vocal performance that commands every track with raw power, signaling a bold, confident new chapter for Linkin Park.",
    fechaEscucha: "2026-08-17",
    usuarioId: 1,
    albumId: 4,
  },
  {
    calificacion: 4,
    comentario: "RUSH! is an infectious, high-octane pop-rock spectacle built for global arenas. Trading some of their raw Italian grit for polished dance-punk grooves and razor-sharp riffs, Måneskin delivers pure, unapologetic attitude and addictive energy from start to finish.",
    fechaEscucha: "2026-08-16",
    usuarioId: 1,
    albumId: 2,
  },
  {
    calificacion: 5,
    comentario: "Teatro d'ira: Vol. I is a raw, electric burst of modern hard rock that captures Måneskin at their absolute peak. Driven by razor-sharp riffs, explosive live energy, and Damiano David’s theatrical vocals, it turns pure attitude and emotional drama into a tight, unforgettable masterpiece.",
    fechaEscucha: "2026-08-13",
    usuarioId: 1,
    albumId: 1,
  },
  {
    calificacion: 4,
    comentario: "Finisterra is Mago de Oz’s ambitious folk metal masterpiece. By blending power metal riffs with Celtic flutes and violins, it turns an epic medieval concept into an endlessly creative, legendary album.",
    fechaEscucha: "2026-08-10",
    usuarioId: 1,
    albumId: 3,
  },
  {
    calificacion: 5,
    comentario: "Teatro d'ira: Vol. I captures Maneskin at their absolute peak. Razor-sharp riffs, explosive live energy and Damiano's theatrical vocals turn pure attitude into a tight, unforgettable record.",
    fechaEscucha: "2026-08-15",
    usuarioId: 2,
    albumId: 1,
  },
  {
    calificacion: 5,
    comentario: "\"The Sharpest Lives\" is an absolute rush on The Black Parade, blending dark, frantic energy with an insanely catchy hook. Gerard Way's theatrical vocals and the sharp guitar work turn chaotic self-destruction into one of My Chemical Romance's most addictive anthems.",
    fechaEscucha: "2026-08-14",
    usuarioId: 2,
    albumId: 5,
  },
  {
    calificacion: 4,
    comentario: "An infectious, high-octane pop-rock spectacle built for global arenas. It trades some of the raw Italian grit for polished dance-punk grooves, but the attitude never drops.",
    fechaEscucha: "2026-08-12",
    usuarioId: 3,
    albumId: 2,
  },
  {
    calificacion: 5,
    comentario: "From Zero is a fiery, seamless rebirth for Linkin Park. Blending raw, heavy nostalgia with fresh, high-voltage energy-fueled by Emily Armstrong's powerhouse vocals-it proves the band can honor their iconic legacy while stepping boldly into a new era.",
    fechaEscucha: "2026-08-18",
    usuarioId: 3,
    albumId: 4,
  },
  {
    calificacion: 5,
    comentario: "Mago de Oz's ambitious folk metal masterpiece. Power metal riffs blended with Celtic flutes and violins turn an epic medieval concept into a legendary album.",
    fechaEscucha: "2026-08-09",
    usuarioId: 4,
    albumId: 3,
  },
  {
    calificacion: 5,
    comentario: "\"Toxicity\" is pure chaotic genius. Blending heavy, erratic riffs with Serj Tankian's manic vocals, System of a Down turns societal overload into an insanely catchy, immortal metal anthem.",
    fechaEscucha: "2026-08-11",
    usuarioId: 4,
    albumId: 6,
  },
  {
    calificacion: 4,
    comentario: "From Zero strikes a balance between heavy nostalgia and genuine reinvention. Emily Armstrong commands every track with raw power, signaling a confident new chapter.",
    fechaEscucha: "2026-08-14",
    usuarioId: 5,
    albumId: 4,
  },
  {
    calificacion: 5,
    comentario: "A loud, dramatic favorite that still feels alive on every listen.",
    fechaEscucha: "2026-08-07",
    usuarioId: 5,
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
