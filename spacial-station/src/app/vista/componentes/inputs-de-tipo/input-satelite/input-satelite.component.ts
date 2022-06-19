import { Component, Output, EventEmitter } from '@angular/core';
import { SateliteArtificialInterface } from 'src/app/modelo/naveInterfaces.interface';

@Component({
  selector: 'app-input-satelite',
  templateUrl: './input-satelite.component.html'
})
export class InputSateliteComponent {

  enOperacion: string = '';
  ubicacionObjetivo: string = '';
  altitud: number = 0;
  nivelDeOrbita: string = '';

  @Output() informacionAdicionalAgregada = new EventEmitter<SateliteArtificialInterface>();

  constructor() { }

  agregarInformacion(){
    const sateliteData: SateliteArtificialInterface = {
      enOperacion: this.enOperacion === 'si',
      ubicacionObjetivo: this.ubicacionObjetivo,
      altitud: this.altitud,
      nivelDeOrbita: this.nivelDeOrbita
    }

    this.informacionAdicionalAgregada.emit(sateliteData);
  }

}
