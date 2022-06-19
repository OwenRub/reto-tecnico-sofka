import { Component, Output, EventEmitter } from '@angular/core';
import { SondaInterface } from 'src/app/modelo/naveInterfaces.interface';

@Component({
  selector: 'app-input-sonda',
  templateUrl: './input-sonda.component.html'
})
export class InputSondaComponent {

  enOperacion: string = '';
  ubicacionObjetivo: string = '';
  distanciaDeTierra: number = 0;
  puedeAterrizar: string = "";
  sistemaDeAterrizaje: string = "";

  @Output() informacionAdicionalAgregada = new EventEmitter<SondaInterface>();

  constructor() { }

  agregarInformacion(){
    const sondaData: SondaInterface = {
      enOperacion: this.enOperacion === 'si',
      ubicacionObjetivo: this.ubicacionObjetivo,
      distanciaDeTierra: this.distanciaDeTierra,
      puedeAterrizar: this.puedeAterrizar === 'si',
      sistemaDeAterrizaje: this.sistemaDeAterrizaje
    }
    console.log(sondaData)

    this.informacionAdicionalAgregada.emit(sondaData);
  }

}
