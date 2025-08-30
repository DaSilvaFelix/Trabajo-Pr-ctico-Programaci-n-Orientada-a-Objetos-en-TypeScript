import { Equipo } from "./Equipo";

// Clase abstracta base para deportes
export abstract class Deporte {
  readonly nombre: string; // Nombre del deporte
  readonly maxPorEquipo: number; // Límite de jugadores por equipo

  constructor(nombre: string, maxPorEquipo: number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }

  // Valida si el equipo cumple con el límite permitido
  validar(equipo: Equipo): boolean {
    return equipo.cantidad <= this.maxPorEquipo;
  }
}
