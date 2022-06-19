import { Nave } from "./Nave";
import { NaveInterface } from "./naveInterfaces.interface";


export class NaveNoTripulada extends Nave{

  private ubicacionObjetivo: string;
  private enOperacion: boolean;

  constructor(naveInfo: NaveInterface, ubicacionObjetivo: string, enOperacion: boolean){
    super(naveInfo);
    this.ubicacionObjetivo = ubicacionObjetivo;
    this.enOperacion = enOperacion;
  }

  // GETTERS
  get getUbicacionObjetivo(): string{
    return this.ubicacionObjetivo;
  }
  get getEnOperacion(): boolean{
    return this.enOperacion;
  }

  // SETTERS
  set setUbicacionObjetivo(ubicacionObjetivo: string){
    this.ubicacionObjetivo = ubicacionObjetivo;
  }
  set setEnOperacion(enOperacion: boolean){
    this.enOperacion = enOperacion;
  }
}