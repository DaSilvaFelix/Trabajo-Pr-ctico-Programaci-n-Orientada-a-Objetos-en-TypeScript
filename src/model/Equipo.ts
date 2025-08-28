import type ICompetidor from "../interfaces/ICompetidor.js";
import type Jugador from "./Jugador.js";

export default class Equipo implements ICompetidor {
  constructor(public nombre: string, private listaDeIntegrantes: string[]) {}

  listarIntegrantes(): string[] {
    return this.listaDeIntegrantes;
  }

  agregarJuagador(jugador: Jugador): void {
    this.listaDeIntegrantes.push(jugador.nombre);
  }

  toString() {
    console.log(` nombre: ${this.nombre}, listaDeIntegrantes: ${this.listaDeIntegrantes}`);
  }

  get cantidad(): number {
    return this.listaDeIntegrantes.length;
  }
}
