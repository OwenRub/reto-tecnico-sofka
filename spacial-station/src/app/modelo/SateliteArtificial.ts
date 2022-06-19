import { NaveInterface, SateliteArtificialInterface } from "./naveInterfaces.interface";
import { NaveNoTripulada } from "./NaveNoTripulada";


export class SateliteArtificial extends NaveNoTripulada{

  private altitud: number;
  private nivelDeOrbita: string;

  constructor(
    naveInfo: NaveInterface,
    { ubicacionObjetivo, enOperacion, altitud, nivelDeOrbita }: SateliteArtificialInterface
  ){
    super(naveInfo, ubicacionObjetivo, enOperacion);
    this.altitud = altitud;
    this.nivelDeOrbita = nivelDeOrbita;
  }

  // Métodos sobrescritos
  override generarReporte(): string {
    return (super.generarReporte()).concat(` Se encuentra en un nivel de órbita ${this.nivelDeOrbita}.`); 
  }
  // No se sobrescribe deducir valor

  // GETTERS
  get getAltitud(): number{
    return this.altitud;
  }
  get getNivelDeOrbita(): string{
    return this.nivelDeOrbita;
  }

  // SETTERS
  set setAltitud(altitud: number){
    this.altitud = altitud;
  }
  set setNivelDeOrbita(nivelDeOrbita: string){
    this.nivelDeOrbita = nivelDeOrbita;
  }
}