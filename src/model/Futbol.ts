import { Deporte } from "./Deporte";

// subclase de Deporte que instancia su nombre como futbol y el limite es de 11
export class Futbol extends Deporte {
  constructor() {
    super("Fútbol", 11);
  }
}
