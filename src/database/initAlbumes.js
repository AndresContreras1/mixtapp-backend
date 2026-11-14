import { Album } from "../models/album.js";

// Los 8 albumes de la app, con los ids 1 a 8 en este orden. La fecha de salida y el Top Colombia
// salen del catalogo de la app; los albumes que no estan en el catalogo los tienen en null
const initialAlbumes = [
  {
    titulo: "Teatro D'ira Vol I",
    artista: "Maneskin",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2Fteatro_maneskin.jpg?alt=media&token=9e41a947-0dd9-44ef-8860-683ff60b552f",
    anio: 2021,
    fechaLanzamiento: "2021-03-19",
    genero: "Hard Rock",
    tendenciaColombia: null,
  },
  {
    titulo: "Rush!",
    artista: "Maneskin",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2Frush.jpg?alt=media&token=dfa6f793-2e0d-4841-a9dd-ad8a694ffc95",
    anio: 2023,
    fechaLanzamiento: null,
    genero: "Dance Punk",
    tendenciaColombia: null,
  },
  {
    titulo: "Finisterra",
    artista: "Mago de Oz",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2Ffinisterrajpg.jpg?alt=media&token=2cca7c9e-2fda-4e73-aa79-f83daa1b4bf0",
    anio: 2000,
    fechaLanzamiento: "2000-01-01",
    genero: "Power Metal",
    tendenciaColombia: null,
  },
  {
    titulo: "From Zero",
    artista: "Linkin Park",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2Ffrom_zerojpg.jpg?alt=media&token=3f558c04-c40c-423b-99c0-3ea5f75fc5d5",
    anio: 2024,
    fechaLanzamiento: "2024-11-15",
    genero: "Rock Alternativo",
    tendenciaColombia: null,
  },
  {
    titulo: "The Sharpest Lives",
    artista: "My Chemical Romance",
    portadaUrl: "https://cdn-images.dzcdn.net/images/cover/f31aab52640d3ef83b6fdee9b4acfe1d/1000x1000-000000-80-0-0.jpg",
    anio: 2006,
    fechaLanzamiento: "2006-10-23",
    genero: "Rock Alternativo",
    tendenciaColombia: null,
  },
  {
    titulo: "Toxicity",
    artista: "System of a down",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2FSystemofaDownToxicityalbumcover.jpg?alt=media&token=363ac3da-1009-4d3e-8a05-aea753ba7198",
    anio: 2001,
    fechaLanzamiento: "2001-01-01",
    genero: "Nu Metal",
    tendenciaColombia: null,
  },
  {
    titulo: "Random Access Memories",
    artista: "Daft Punk",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2Fab67616d0000b2739b9b36b0e22870b9f542d937.jpg?alt=media&token=0ee0193b-c1b3-40d5-b010-bf2491da1852",
    anio: 2013,
    fechaLanzamiento: null,
    genero: "Electrónica",
    tendenciaColombia: null,
  },
  {
    titulo: "The Black Parade",
    artista: "My Chemical Romance",
    portadaUrl: "https://firebasestorage.googleapis.com/v0/b/mixtapp-720eb.firebasestorage.app/o/AlbumCovers%2FBlackparadecover.jpg?alt=media&token=caee5e07-a118-4b14-a596-76f7b4070f80",
    anio: 2006,
    fechaLanzamiento: "2006-10-23",
    genero: "Rock Alternativo",
    tendenciaColombia: null,
  },
];

export async function loadInitialAlbumes() {
  try {
    const count = await Album.count();
    if (count === 0) {
      await Album.bulkCreate(initialAlbumes);
      console.log("Initial albumes loaded");
    }
  } catch (error) {
    console.log(error);
  }
}
