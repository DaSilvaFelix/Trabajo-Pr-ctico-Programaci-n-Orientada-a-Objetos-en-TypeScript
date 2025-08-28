import type Equipo from "./Equipo.js";

export default abstract class Deporte {
  constructor(public nombre: string, public maxPorEquipo: number) {}

  validarEquipo(equipo: Equipo): boolean {
    if (this.maxPorEquipo < equipo.cantidad) return true;
    return false;
  }
}
