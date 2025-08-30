import { Partido } from "./Partido";

// Clase que representa un torneo con múltiples partidos
export class Torneo {
  readonly id: string; // Identificador único del torneo
  readonly nombre: string; // Nombre del torneo
  private partidos: Partido[] = []; // Lista interna de partidos programados

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  // Agrega un partido al torneo
  programarPartido(partido: Partido): void {
    this.partidos.push(partido);
  }

  // Devuelve una lista legible de todos los partidos
  listarPartidos(): string[] {
    return this.partidos.map((p) => p.toString());
  }

  // Busca un partido por su ID
  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find((p) => p.id === id);
  }
}
