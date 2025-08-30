import { Deporte } from "./Deporte";

// subclase de Deporte que instancia su nombre como basquet y el limite es de 5
export class Basquet extends Deporte {
  constructor() {
    super("Básquet", 5);
  }
}
