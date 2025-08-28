import Deporte from "./Deporte.js";

export default class Futbol extends Deporte {
  constructor(nombre: string = "Futbol", maxPorEquipo: number = 11) {
    super(nombre, maxPorEquipo);
  }
}
