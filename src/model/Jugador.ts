export default class Jugador {
  constructor(private id: number, public nombre: string, public edad: number, public posición: string) {}

  toString() {
    console.log(`id: ${this.id},nombre: ${this.nombre}, edad: ${this.edad}, posición: ${this.posición}`);
  }
}
