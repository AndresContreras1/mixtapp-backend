import { Usuario } from "../models/usuario.js";

// Los 5 usuarios iniciales, sin foto; el primero (id 1) es el usuario autenticado de la app
const initialUsuarios = [
  {
    nombre: "Andres Contreras",
    email: "andres@example.com",
  },
  {
    nombre: "Mateo Gómez",
    email: "mateo@example.com",
  },
  {
    nombre: "Valentina Torres",
    email: "valentina@example.com",
  },
  {
    nombre: "Santiago López",
    email: "santiago@example.com",
  },
  {
    nombre: "Camila Herrera",
    email: "camila@example.com",
  },
];

export async function loadInitialUsuarios() {
  try {
    const count = await Usuario.count();
    if (count === 0) {
      await Usuario.bulkCreate(initialUsuarios);
      console.log("Initial usuarios loaded");
    }
  } catch (error) {
    console.log(error);
  }
}
