import { Component, Output, EventEmitter } from '@angular/core';
import { NaveTripuladaInterface } from 'src/app/modelo/naveInterfaces.interface';

@Component({
  selector: 'app-input-tripulada',
  templateUrl: './input-tripulada.component.html'
})
export class InputTripuladaComponent {

  capacidadPasajeros: number = 0;
  proposito: string = '';
  altitud: number = 0;

  @Output() informacionAdicionalAgregada = new EventEmitter<NaveTripuladaInterface>();

  constructor() { }

  agregarInformacion(){
    const naveTripuladaData: NaveTripuladaInterface = {
      capacidadPasajeros: this.capacidadPasajeros,
      proposito: this.proposito,
      altitud: this.altitud
    }

    this.informacionAdicionalAgregada.emit( naveTripuladaData );
  }
}
