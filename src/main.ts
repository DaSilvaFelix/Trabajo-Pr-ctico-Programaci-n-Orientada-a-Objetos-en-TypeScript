import { Jugador } from "./model/Jugador";
import { Equipo } from "./model/Equipo";
import { Partido } from "./model/Partido";
import { Torneo } from "./model/Torneo";
import { Basquet } from "./model/Basquet";
import { Futbol } from "./model/Futbol";

// Instancia de jugadores de fútbol
const jugadoresFutbol = [
  new Jugador("J1", "Messi", 37, "Delantero"),
  new Jugador("J2", "Di María", 36, "Extremo"),
  new Jugador("J3", "Otamendi", 35, "Defensor"),
];

// Instancia de jugadores de básquet
const jugadoresBasquet = [
  new Jugador("B1", "Campazzo", 33, "Base"),
  new Jugador("B2", "Deck", 32, "Alero"),
  new Jugador("B3", "Vildoza", 31, "Escolta"),
  new Jugador("B4", "Laprovittola", 34, "Base"),
  new Jugador("B5", "Delía", 35, "Pivot"),
];

// Creación de equipos y carga de jugadores con validación de duplicados
const equipoFutbol1 = new Equipo("EF1", "Argentina");
jugadoresFutbol.forEach((j) => equipoFutbol1.agregarJugador(j));

const equipoFutbol2 = new Equipo("EF2", "Brasil");
jugadoresFutbol.forEach((j) => equipoFutbol2.agregarJugador(j));

const equipoBasquet1 = new Equipo("EB1", "Argentina Basket");
jugadoresBasquet.forEach((j) => equipoBasquet1.agregarJugador(j));

const equipoBasquet2 = new Equipo("EB2", "USA");
jugadoresBasquet.forEach((j) => equipoBasquet2.agregarJugador(j));

// Instancia de deportes con cupo máximo por equipo
const futbol = new Futbol(); // maxPorEquipo = 11
const basquet = new Basquet(); // maxPorEquipo = 5

// Validación de equipos según el deporte
console.log("validando equipos de futbol: ", futbol.validar(equipoFutbol1)); // true
console.log("validando equipos de basquet: ", basquet.validar(equipoBasquet1)); // true

// Creación de partidos con validación de local ≠ visitante
const partidoFutbol = new Partido("P1", equipoFutbol1, equipoFutbol2, futbol);
const partidoBasquet = new Partido("P2", equipoBasquet1, equipoBasquet2, basquet);

// Registro de resultados con validación de cupos
partidoFutbol.jugar(3, 2); // Resultado: 3 - 2
partidoBasquet.jugar(89, 91); // Resultado: 89 - 91

// Salida legible de partidos
console.log("puntos de", partidoFutbol.toString()); // Fútbol: Argentina vs Brasil → 3 - 2
console.log("puntos de", partidoBasquet.toString()); // Básquet: Argentina Basket vs USA → 89 - 91

// Creación de torneo y programación de partidos
const torneo = new Torneo("T1", "Copa Internacional");
torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

// Listado completo de partidos programados
console.log("lita de todo los partidos que se realizaron", torneo.listarPartidos()); // Array de strings con descripción de cada partido

// Búsqueda de partido por ID
console.log("partido que se jugo con la Id P1:", torneo.buscarPartido("P1")?.toString()); // Fútbol: Argentina vs Brasil → 3 - 2
