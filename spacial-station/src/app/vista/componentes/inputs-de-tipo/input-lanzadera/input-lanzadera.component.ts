import { Component, Output, EventEmitter } from '@angular/core';
import { VehiculoLanzaderaInterface } from 'src/app/modelo/naveInterfaces.interface';

@Component({
  selector: 'app-input-lanzadera',
  templateUrl: './input-lanzadera.component.html'
})
export class InputLanzaderaComponent {

  capacidadDeCarga: number = 0;
  cargaUtil: string = '';
  cargaSujeta: string = '';
  cantidadDePropulsores: number = 0;

  @Output() informacionAdicionalAgregada = new EventEmitter<VehiculoLanzaderaInterface>();

  constructor() { }

  agregarInformacion(){
    const lanzaderaData: VehiculoLanzaderaInterface = {
      capacidadDeCarga: this.capacidadDeCarga,
      cargaUtil: this.cargaUtil,
      cargaSujeta: this.cargaUtil === 'si',
      cantidadPropulsores: this.cantidadDePropulsores
    }

    this.informacionAdicionalAgregada.emit( lanzaderaData );
  }

}
