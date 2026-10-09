# Mixtapp Backend

**La API REST de Mixtapp: usuarios, álbumes y las reseñas que los unen.**

Mixtapp Backend es la API de [Mixtapp](https://github.com/AndresContreras1/Mixtapp), la app Android donde
abres un álbum, le pones una calificación y escribes tu reseña. Expone los usuarios y los álbumes en modo
lectura y un CRUD completo de reseñas, cada una ligada a un usuario y a un álbum. Está hecha con Node.js,
Express y Sequelize sobre PostgreSQL. Es la entrega del sprint 8 de Computación Móvil, ajustada en el sprint 9
para que la app la consuma con Retrofit.

![Node.js](https://img.shields.io/badge/Node.js-24-5FA04E?logo=nodedotjs&logoColor=white)
![Express 5](https://img.shields.io/badge/Express-5.2-000000?logo=express&logoColor=white)
![Sequelize 6](https://img.shields.io/badge/Sequelize-6.37-52B0E7?logo=sequelize&logoColor=white)
![PostgreSQL 17](https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql&logoColor=white)
![nodemon](https://img.shields.io/badge/nodemon-dev-76D04B?logo=nodemon&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-pruebas-FF6C37?logo=postman&logoColor=white)

> [!NOTE]
> No hay autenticación: el enunciado del sprint la deja por fuera. Cada arranque recrea las tablas con
> `sync({ force: true })` y vuelve a cargar los datos iniciales, así que los ids empiezan siempre en 1 y lo
> que se crea durante una sesión se pierde al reiniciar el servidor.

## Contenido

[Qué hace](#qué-hace) · [Funcionalidades](#funcionalidades) · [Arquitectura](#arquitectura) ·
[Cómo ejecutarlo](#cómo-ejecutarlo) · [Endpoints](#endpoints) · [Pruebas con Postman](#pruebas-con-postman) ·
[Consumo desde la app](#consumo-desde-la-app) · [Estructura](#estructura)

## Qué hace

```mermaid
erDiagram
    USUARIOS ||--o{ REVIEWS : escribe
    ALBUMES ||--o{ REVIEWS : recibe
    USUARIOS {
        int id PK
        string nombre
        string email UK
        string fotoUrl
    }
    ALBUMES {
        int id PK
        string titulo
        string artista
        string portadaUrl
        int anio
        string genero
    }
    REVIEWS {
        int id PK
        int calificacion
        string comentario
        date fechaEscucha
        int usuarioId FK
        int albumId FK
    }
```

Un usuario escribe muchas reseñas y un álbum recibe muchas; cada reseña pertenece a un solo usuario y a un
solo álbum. Antes de guardar una reseña, la API comprueba que el usuario y el álbum existan, y las dos llaves
foráneas quedan también en PostgreSQL, así que no puede quedar una reseña apuntando a algo que no existe.

## Funcionalidades

| Área | Qué tiene |
|---|---|
| **Usuarios** | Consulta de un usuario por id, y de sus reseñas con el álbum de cada una. |
| **Álbumes** | Todos los álbumes, el detalle de uno por id, y sus reseñas con el usuario que escribió cada una. |
| **Reseñas** | Crear con id de usuario, id de álbum, calificación, comentario y fecha de escucha; modificar y eliminar por id. |
| **Datos iniciales** | 5 usuarios, los 8 álbumes de la app con sus portadas y 12 reseñas, cargados al arrancar con `count()` y `bulkCreate`. Los 5 usuarios escribieron alguna y todos los álbumes, salvo *Random Access Memories*, tienen al menos una. El usuario 1 es el de la app, con las 4 reseñas de *Mis reseñas*, y los ids de los álbumes coinciden con los de la app. |
| **Errores** | `404` en JSON cuando el usuario, el álbum o la reseña no existen, y `500` en JSON cuando una consulta falla. |

## Arquitectura

```mermaid
flowchart LR
    P(["Postman"]) -- "HTTP · JSON" --> R["<b>routes</b><br/>Router de Express"]
    A(["App Android<br/>Retrofit"]) -- "HTTP · JSON" --> R
    R --> C["<b>controller</b><br/>async (req, res)"]
    C --> M["<b>models</b><br/>Sequelize"]
    M --> D[("<b>PostgreSQL</b><br/>base mixtapp")]
```

Cada petición entra por un router, que la pasa a una función del controlador; el controlador consulta con los
modelos de Sequelize y responde JSON. Las relaciones se declaran en `models/relations.js`, y el arranque sigue
siempre el mismo orden: conectar, crear las tablas, crear las relaciones y cargar los datos.

| Capa | Tecnología |
|---|---|
| Servidor | Node.js · Express 5 |
| Datos | PostgreSQL 17 · Sequelize 6 con `pg` y `pg-hstore` |
| Desarrollo | nodemon |
| Herramientas | DBeaver para ver la base · Postman para las peticiones |

## Cómo ejecutarlo

Necesitas Node.js y PostgreSQL escuchando en el puerto 5432.

1. Crea la base `mixtapp`. En DBeaver: conexión a PostgreSQL, *Databases → Crear nueva base de datos*.
2. Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/AndresContreras1/mixtapp-backend.git
cd mixtapp-backend
npm install
```

3. Revisa la conexión en `src/database/database.js`: base, usuario, contraseña y puerto de tu PostgreSQL.
4. Arranca el servidor:

```bash
npm run dev
```

En la consola tienen que salir estas líneas, y la API queda en `http://localhost:3000`:

```text
Conexión a la base de datos establecida
Initial usuarios loaded
Initial albumes loaded
Initial reviews loaded
Servidor escuchando en el puerto 3000
```

## Endpoints

| Método | Ruta | Qué hace | Respuestas |
|---|---|---|---|
| `GET` | `/usuarios/:id` | Un usuario por id | `200` · `404` |
| `GET` | `/usuarios/:id/reviews` | Las reseñas de un usuario, con el álbum de cada una | `200` · `404` |
| `GET` | `/albumes` | Todos los álbumes | `200` |
| `GET` | `/albumes/:id` | El detalle de un álbum | `200` · `404` |
| `GET` | `/albumes/:id/reviews` | Las reseñas de un álbum, con el usuario de cada una | `200` · `404` |
| `POST` | `/reviews` | Crea una reseña | `200` · `404` |
| `PUT` | `/reviews/:id` | Modifica una reseña | `200` · `404` |
| `DELETE` | `/reviews/:id` | Elimina una reseña | `200` · `404` |

Crear una reseña lleva el id del usuario, el id del álbum y la reseña en el body. `fechaEscucha` es opcional y
va como fecha `AAAA-MM-DD`:

```json
{
  "usuarioId": 1,
  "albumId": 6,
  "calificacion": 5,
  "comentario": "Toxicity sigue sonando igual de potente.",
  "fechaEscucha": "2026-10-08"
}
```

Si el usuario o el álbum no existen, responde `404` con `{ "error": "Usuario no encontrado" }` o
`{ "error": "Álbum no encontrado" }`. Eliminar responde `{ "message": "Review eliminada" }`. Las reseñas de un
álbum traen anidado al usuario que las escribió:

```json
[
  {
    "id": 13,
    "calificacion": 5,
    "comentario": "Toxicity sigue sonando igual de potente.",
    "fechaEscucha": "2026-10-08",
    "usuarioId": 1,
    "albumId": 6,
    "createdAt": "2026-10-09T15:24:00.941Z",
    "updatedAt": "2026-10-09T15:24:00.941Z",
    "usuario": { "id": 1, "nombre": "Sofía Ramírez", "fotoUrl": null }
  }
]
```

## Pruebas con Postman

Con el servidor recién arrancado, esta secuencia recorre todo lo que pide el sprint. En los `POST` y `PUT`, el
body va en *Body → raw → JSON*.

1. `GET /usuarios/1` y `GET /usuarios/999` (`404`).
2. `GET /albumes`, `GET /albumes/1` y `GET /albumes/999` (`404`).
3. `POST /reviews` con el body de arriba: crea la reseña con id `13`.
4. `GET /albumes/6/reviews` y `GET /usuarios/1/reviews`: la reseña aparece en los dos.
5. `PUT /reviews/13` con `{ "calificacion": 4, "comentario": "Editada", "fechaEscucha": "2026-10-09" }`.
6. `DELETE /reviews/13` (`200` con el mensaje), y otra vez para ver el `404`.

## Consumo desde la app

La app Android consume la API con Retrofit desde el emulador:

- La URL base es `http://10.0.2.2:3000/`. Desde el emulador no se llama a `localhost`, como en Postman, sino a
  esa dirección.
- Los usuarios del backend no son los de Firebase, así que la app usa siempre el usuario `1` como el usuario
  autenticado, como permite el enunciado del sprint 9.
- Eliminar responde un JSON y no un `204` vacío: con el `204` sin cuerpo, Retrofit falla en la app.
- Los `include` de las reseñas traen el usuario o el álbum anidado, que la app lee en sus DTO.

## Estructura

```text
src/
├── controller/   usuario · album · review
├── database/     database.js (conexión) · initUsuarios · initAlbumes · initReviews
├── models/       usuario · album · review · relations
├── routes/       usuario · album · review
├── app.js        crea la app y registra los routers
└── index.js      conecta, crea tablas y relaciones, carga los datos y abre el puerto 3000
```

