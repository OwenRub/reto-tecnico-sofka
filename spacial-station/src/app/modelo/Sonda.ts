import { NaveInterface, SondaInterface } from "./naveInterfaces.interface";
import { NaveNoTripulada } from "./NaveNoTripulada";


export class Sonda extends NaveNoTripulada{

  private distanciaDeTierra: number;
  private puedeAterrizar: boolean;
  private sistemaDeAterrizaje: string;

  constructor(
    naveInfo: NaveInterface,
    { ubicacionObjetivo, enOperacion, distanciaDeTierra, puedeAterrizar, sistemaDeAterrizaje }: SondaInterface
  ){
    super(naveInfo, ubicacionObjetivo, enOperacion);
    this.distanciaDeTierra = distanciaDeTierra;
    this.puedeAterrizar = puedeAterrizar;
    this.sistemaDeAterrizaje = sistemaDeAterrizaje;
  }

  // Métodos sobrescritos
  override generarReporte(): string {
    return (super.generarReporte()).concat(` ${this.puedeAterrizar?'Puede':'No puede'} aterrizar en su objetivo.`); 
  }
  override deducirValor(): number{    // Si tiene sistema de aterrizaje vale mas
    return super.deducirValor() + (this.puedeAterrizar ? 1300000 : 0);
  }

  // GETTERS
  get getDistanciaDeTierra(): number{
    return this.distanciaDeTierra;
  }
  get getPuedeAterrizar(): boolean{
    return this.puedeAterrizar;
  }
  get getSistemaDeAterrizaje(): string{
    return this.sistemaDeAterrizaje;
  }

  // SETTERS
  set setDistanciaDeTierra(distancia: number){
    this.distanciaDeTierra = distancia;
  }
  set setPuedeAterrizar(puedeAterrizar: boolean){
    this.puedeAterrizar = puedeAterrizar;
  }
  set setSistemaDeAterrizaje(sistemaDeAterrizaje: string){
    this.sistemaDeAterrizaje = sistemaDeAterrizaje;
  }
}

