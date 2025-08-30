import { ICompetidor } from "../interfaces/ICompetidor";
import { Jugador } from "./Jugador";

// creamos la clase Equipo que implementa ICompetidor
export class Equipo implements ICompetidor {
  readonly id: string; // atributo de IIdentificable
  nombre: string;
  private jugadores: Map<string, Jugador> = new Map(); // Mapa privado que almacena jugadores únicos por id, evitando duplicados y permitiendo acceso eficiente

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
  // método que permite agregar integrantes
  agregarJugador(jugador: Jugador): void {
    // validación donde valida si hay un jugador en el equipo que ya este con la misma id para retornar un error sino lo agrega
    if (this.jugadores.has(jugador.id)) {
      throw new Error(`Jugador duplicado: ${jugador.id}`);
    }
    this.jugadores.set(jugador.id, jugador);
  }

  // método que convierte los jugadores que estén dentro del equipo en clave valor con this.jugadores.values() y los convertimos
  // en un objeto de map que después se convierte en un array de string
  listarIntegrantes(): string[] {
    return Array.from(this.jugadores.values()).map((jugador) => jugador.toString());
  }

  // obtenemos la cantidad de jugadores que hay y lo devolvemos
  get cantidad(): number {
    return this.jugadores.size;
  }
  // método que devolverá los datos no privado de el equipo
  toString(): string {
    return `${this.nombre} [${this.cantidad} jugadores]`;
  }
}
