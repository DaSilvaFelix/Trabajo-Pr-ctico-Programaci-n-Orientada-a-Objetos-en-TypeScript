import Deporte from "./Deporte.js";

export default class Basquet extends Deporte {
  constructor(nombre: string = "Basquet", maxPorEquipo: number = 5) {
    super(nombre, maxPorEquipo);
  }
}
