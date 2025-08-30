import IIdentificable from "./IIdentificable";
// se crea la interfaz ICompetidor extendiendo de IIdentificable
// esto lo hice por que cada competidor que se integre debe tener un identificador
export interface ICompetidor extends IIdentificable {
  nombre: string;
  listarIntegrantes(): string[];
}
