import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

// Clase que representa un partido entre dos equipos en un deporte específico
export class Partido {
  readonly id: string; // Identificador único del partido
  readonly local: Equipo; // Equipo local
  readonly visitante: Equipo; // Equipo visitante
  readonly deporte: Deporte; // Tipo de deporte que regula el partido
  private resultado?: Resultado; // Resultado del partido (opcional)

  constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
    // Validación: no se permite que ambos equipos sean el mismo
    if (local.id === visitante.id) {
      throw new Error("Local y visitante no pueden ser el mismo equipo");
    }
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  // Ejecuta el partido y registra el resultado si los equipos son válidos
  jugar(golesLocal: number, golesVisitante: number): void {
    if (!this.deporte.validar(this.local)) {
      throw new Error(`Equipo local no válido para ${this.deporte.nombre}`);
    }
    if (!this.deporte.validar(this.visitante)) {
      throw new Error(`Equipo visitante no válido para ${this.deporte.nombre}`);
    }
    this.resultado = new Resultado(golesLocal, golesVisitante);
  }

  // Devuelve una descripción legible del partido y su resultado
  toString(): string {
    const resultadoStr = this.resultado ? this.resultado.toString() : "Pendiente";
    return `${this.deporte.nombre}: ${this.local.nombre} vs ${this.visitante.nombre} → ${resultadoStr}`;
  }
}
