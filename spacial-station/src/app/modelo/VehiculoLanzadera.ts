import { Nave } from "./Nave";
import { NaveInterface, VehiculoLanzaderaInterface } from "./naveInterfaces.interface";

export class VehiculoLanzadera extends Nave{

  private capacidadDeCarga: number;
  private cargaUtil: string;
  private cargaSujeta: boolean;
  private cantidadPropulsores: number;

  constructor(
    naveInfo: NaveInterface, 
    { capacidadDeCarga, cargaUtil, cargaSujeta, cantidadPropulsores }: VehiculoLanzaderaInterface
  ){
    super(naveInfo);
    this.capacidadDeCarga = capacidadDeCarga;
    this.cargaUtil = cargaUtil;
    this.cargaSujeta = cargaSujeta;
    this.cantidadPropulsores = cantidadPropulsores;
  }

  // Métodos sobrescritos
  override generarReporte(): string {
    return (super.generarReporte()).concat(` Puede cargar ${this.capacidadDeCarga} toneladas con sus ${this.cantidadPropulsores} propulsores.`); 
  }
  override deducirValor(): number{    // Ahora el valor tiene en cuenta la cantidad de propulsores
    return super.deducirValor() + 2000000 * this.cantidadPropulsores;
  }

  // GETTERS
  get getCapacidadDeCarga(): number{
    return this.capacidadDeCarga;
  }
  get getCargaUtil(): string{
    return this.cargaUtil;
  }
  get getCargaSujeta(): boolean{
    return this.cargaSujeta;
  }
  get getCantidadDePropulsores(): number{
    return this.cantidadPropulsores;
  }

  // SETTERS
  set setCapacidadDeCarga(capacidad: number){
    this.capacidadDeCarga = capacidad;
  }
  set setCargaUtil(cargaUtil: string){
    this.cargaUtil = cargaUtil;
  }
  set setCargaSujeta(estaSujeta: boolean){
    this.cargaSujeta = estaSujeta;
  }
  set setCantidadDePropulsores(propulsores: number){
    this.cantidadPropulsores = propulsores;
  }

}