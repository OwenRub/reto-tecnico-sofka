import { Nave } from "./Nave";
import { NaveInterface, NaveTripuladaInterface } from "./naveInterfaces.interface";


export class NaveTripulada extends Nave{

  private capacidadPasajeros: number;
  private proposito: string;
  private altitud: number;

  constructor(naveInfo: NaveInterface, {capacidadPasajeros, proposito, altitud}: NaveTripuladaInterface){
    super(naveInfo);
    this.capacidadPasajeros = capacidadPasajeros;
    this.proposito = proposito;
    this.altitud = altitud;
  }

  // Métodos sobrescritos para alterar su comportamiento
  override generarReporte(): string {
    return (super.generarReporte()).concat(` Puede cargar ${this.capacidadPasajeros} pasajeros para su ${this.proposito}.`); 
  }
  override deducirValor(): number{   // Ahora el valor tiene en cuenta la capacidad de pasajeros
    return super.deducirValor() + 120000 * this.capacidadPasajeros;
  }

  // GETTERS
  get getCapacidadPasajeros(): number{
    return this.capacidadPasajeros;
  }
  get getProposito(): string{
    return this.proposito;
  }
  get getAltitud(): number{
    return this.altitud;
  }

  // SETTERS
  set setCapacidadPasajeros(capacidad: number){
    this.capacidadPasajeros = capacidad;
  }
  set setProposito(proposito: string){
    this.proposito = proposito;
  }
  set setAltitud(altitud: number){
    this.altitud = altitud;
  }
}