// Clase que representa el resultado de un partido
export class Resultado {
  readonly golesLocal: number; // Goles del equipo local
  readonly golesVisitante: number; // Goles del equipo visitante

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  // Devuelve el resultado en formato legible: "2 - 1"
  toString(): string {
    return `${this.golesLocal} - ${this.golesVisitante}`;
  }
}
