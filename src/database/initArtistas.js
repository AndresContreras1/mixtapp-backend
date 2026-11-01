import { Artista } from "../models/artista.js";

// El mismo catalogo de la app. grupo es la banda del artista, o null si es solista
const initialArtistas = [
  {
    nombre: "Mike Shinoda",
    grupo: "Linkin Park",
    genero: "Rock",
    subgenero: "Rock alternativo",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/83893b115ac94cfa93fc8ba94bdc91f8/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Cofundador de Linkin Park: rapea, canta, toca y produce.",
      "Tiene un proyecto propio de hip hop: Fort Minor.",
      "Estudió ilustración en el ArtCenter College of Design.",
    ],
    tendencia: null,
  },
  {
    nombre: "Chester Bennington",
    grupo: "Linkin Park",
    genero: "Rock",
    subgenero: "Rock alternativo",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/83fb2aef70b7906e7b5b84ac8317afac/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Fue la voz de Linkin Park desde 1999 hasta su muerte en 2017.",
      "Entre 2013 y 2015 también cantó en Stone Temple Pilots.",
      "Nació en Phoenix, Arizona, en 1976.",
    ],
    tendencia: null,
  },
  {
    nombre: "Gerard Way",
    grupo: "My Chemical Romance",
    genero: "Rock",
    subgenero: "Emo",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/60f1c69bc4f5459bd8b232cfd77b3176/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Vocalista y cofundador de My Chemical Romance.",
      "Creó el cómic The Umbrella Academy, que Netflix llevó a serie.",
      "Nació en Nueva Jersey en 1977.",
    ],
    tendencia: null,
  },
  {
    nombre: "Damiano David",
    grupo: "Måneskin",
    genero: "Rock",
    subgenero: "Hard rock",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/d50c689f6e096e7f596b9bb9828998b1/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Vocalista de Måneskin.",
      "Lanzó su primer álbum solista, Funny Little Fears, el 16 de mayo de 2025.",
      "Nació en Roma en 1999.",
    ],
    tendencia: null,
  },
  {
    nombre: "Alex Turner",
    grupo: "Arctic Monkeys",
    genero: "Rock",
    subgenero: "Indie rock",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/56844fe93886217d3f89b76a338f5dd1/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Vocalista y compositor de Arctic Monkeys.",
      "También lidera The Last Shadow Puppets con Miles Kane.",
      "Nació en Sheffield, Inglaterra, en 1986.",
    ],
    tendencia: null,
  },
  {
    nombre: "Gustavo Cerati",
    grupo: "Soda Stereo",
    genero: "Rock",
    subgenero: "Rock en español",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/d9935156530ada9a8da56c90a567d6d2/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Líder, voz y guitarra de Soda Stereo.",
      "Tuvo una carrera solista con discos como Bocanada (1999).",
      "Murió en Buenos Aires en 2014.",
    ],
    tendencia: null,
  },
  {
    nombre: "Andrea Echeverri",
    grupo: "Aterciopelados",
    genero: "Rock",
    subgenero: "Rock en español",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/2bf966dd5099aa4e8a59335c8f8556bc/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Voz de Aterciopelados, la banda que fundó en Bogotá con Héctor Buitrago.",
      "También es ceramista.",
      "En 2005 lanzó un álbum solista con su nombre.",
    ],
    tendencia: null,
  },
  {
    nombre: "Serj Tankian",
    grupo: "System Of A Down",
    genero: "Metal",
    subgenero: "Nu metal",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/02f2cecfe6de1a85a1250285c45659ee/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Voz de System of a Down.",
      "Nació en Beirut, Líbano, en 1967.",
      "Es activista por el reconocimiento del genocidio armenio.",
    ],
    tendencia: null,
  },
  {
    nombre: "Bruce Dickinson",
    grupo: "Iron Maiden",
    genero: "Metal",
    subgenero: "Heavy metal",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/27cb927e6588516f7706f5e55424718b/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Voz de Iron Maiden: entró en 1981, salió en 1993 y volvió en 1999.",
      "Es piloto comercial y ha volado el avión de la banda en sus giras.",
      "También practica esgrima.",
    ],
    tendencia: null,
  },
  {
    nombre: "Corey Taylor",
    grupo: "Slipknot",
    genero: "Metal",
    subgenero: "Nu metal",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/fe999c6ac08354ca8d665e6001ac0ba3/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Voz de Slipknot.",
      "También es el vocalista de Stone Sour.",
      "Nació en Des Moines, Iowa, la ciudad de Slipknot.",
    ],
    tendencia: null,
  },
  {
    nombre: "KAROL G",
    grupo: null,
    genero: "Reggaetón",
    subgenero: "Reggaetón",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/5b0aab23f8d2856951a92f3a9faf70e3/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en Medellín en 1991.",
      "Le dicen La Bichota.",
      "MAÑANA SERÁ BONITO ganó el Grammy a mejor álbum de música urbana.",
    ],
    tendencia: 1,
  },
  {
    nombre: "Bad Bunny",
    grupo: null,
    genero: "Reggaetón",
    subgenero: "Reggaetón",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/044a3f315b041864887a8dd8709e6926/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Creció en Vega Baja, Puerto Rico.",
      "Antes de la fama trabajaba empacando mercado en un supermercado.",
      "DeBÍ TiRAR MáS FOToS es un homenaje a la música de Puerto Rico.",
    ],
    tendencia: 26,
  },
  {
    nombre: "Feid",
    grupo: null,
    genero: "Reggaetón",
    subgenero: "Reggaetón",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/e629c93e03b3c225d8d52a42bae71537/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en Medellín.",
      "Sus fans lo llaman Ferxxo.",
      "El verde es el color de toda su imagen.",
    ],
    tendencia: 4,
  },
  {
    nombre: "Beéle",
    grupo: null,
    genero: "Reggaetón",
    subgenero: "Afrobeat",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/517e60ed50f56034769b7e845a71e35c/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Se llama Brandon de Jesús López Orozco y es de Barranquilla.",
      "Fue el artista más escuchado en Spotify Colombia en 2025.",
      "Su álbum debut, BORONDO, salió en 2025.",
    ],
    tendencia: 18,
  },
  {
    nombre: "J Balvin",
    grupo: null,
    genero: "Reggaetón",
    subgenero: "Reggaetón",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/325eaa46bc25052d0e3d549d60cc8225/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en Medellín en 1985.",
      "Su nombre real es José Álvaro Osorio Balvín.",
      "Vibras ganó el Latin Grammy a mejor álbum de música urbana.",
    ],
    tendencia: 41,
  },
  {
    nombre: "Daddy Yankee",
    grupo: null,
    genero: "Reggaetón",
    subgenero: "Reggaetón",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/a4f77d40d68cf544e74883b2bd904fce/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Le dicen El Big Boss y es de San Juan, Puerto Rico.",
      "Gasolina llevó el reggaetón al mundo en 2004.",
      "Se retiró de la música en 2023.",
    ],
    tendencia: null,
  },
  {
    nombre: "Jessi Uribe",
    grupo: null,
    genero: "Música popular",
    subgenero: "Despecho",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/fad276573bfee42f0875083d6f25da06/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en Bucaramanga en 1987.",
      "Empezó cantando con mariachis, como su papá.",
      "Su éxito Dulce pecado lo dio a conocer en 2017.",
      "Está casado con la cantante Paola Jara.",
    ],
    tendencia: null,
  },
  {
    nombre: "Yeison Jiménez",
    grupo: null,
    genero: "Música popular",
    subgenero: "Despecho",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/f9b243ec5542935a15e95c06cb57777e/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en Manzanares, Caldas, en 1991.",
      "En julio de 2025 fue el primer cantante de música popular en llenar solo El Campín.",
      "Murió el 10 de enero de 2026 en un accidente aéreo en Paipa, Boyacá.",
    ],
    tendencia: 81,
  },
  {
    nombre: "Luis Alfonso",
    grupo: null,
    genero: "Música popular",
    subgenero: "Música popular",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/b253934243890ef02b50bf212a250e15/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en Popayán en 1993.",
      "Lo llaman El Señorazo.",
      "Antes de la música trabajó cargando bultos en una plaza de mercado.",
    ],
    tendencia: null,
  },
  {
    nombre: "Jhonny Rivera",
    grupo: null,
    genero: "Música popular",
    subgenero: "Despecho",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/9e3f24129b476956e4435cd5d1581bf1/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Nació en 1974 en Pereira, Risaralda.",
      "Antes de cantar fue carpintero.",
      "Su primer sencillo, El dolor de una partida, salió en 2004.",
    ],
    tendencia: null,
  },
  {
    nombre: "Paola Jara",
    grupo: null,
    genero: "Música popular",
    subgenero: "Despecho",
    fotoUrl: "https://cdn-images.dzcdn.net/images/artist/5d7d4b9579b4ffd033a81282d21ab789/1000x1000-000000-80-0-0.jpg",
    datosCuriosos: [
      "Se llama Paola Andrea Zapata Jaramillo y es antioqueña.",
      "Empezó su carrera profesional a los 14 años.",
      "Está casada con Jessi Uribe.",
    ],
    tendencia: null,
  },
];

export async function loadInitialArtistas() {
  try {
    const count = await Artista.count();
    if (count === 0) {
      await Artista.bulkCreate(initialArtistas);
      console.log("Initial artistas loaded");
    }
  } catch (error) {
    console.log(error);
  }
}
