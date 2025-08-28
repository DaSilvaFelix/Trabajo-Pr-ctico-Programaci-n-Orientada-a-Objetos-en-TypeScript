export default class Resultado {
  constructor(public golesLocal: number, public golesVisitante: number) {}

  toString() {
    console.log(` golesLocal: ${this.golesLocal}, golesVisitante: ${this.golesVisitante}`);
  }
}
