import IIdentificable from "../interfaces/IIdentificable";

// creamos la clase jugador que implementa la Interfaz de IIdentificable
export class Jugador implements IIdentificable {
  readonly id: string; // implementación de el atributo de la interface
  nombre: string;
  edad: number;
  posicion: string; // posición lo incluí xq es necesario saber en que bas a jugar

  constructor(id: string, nombre: string, edad: number, posicion: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }
  // método que devolverá los datos no privado de el jugador
  toString(): string {
    return `${this.nombre} (${this.edad})${this.posicion ? " - " + this.posicion : ""}`;
  }
}
