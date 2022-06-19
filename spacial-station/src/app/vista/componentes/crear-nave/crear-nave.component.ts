import { Component } from '@angular/core';
import { NaveService } from 'src/app/controlador/nave.service';
import { NaveInterface, NaveTripuladaInterface, SateliteArtificialInterface, SondaInterface, VehiculoLanzaderaInterface } from 'src/app/modelo/naveInterfaces.interface';

@Component({
  selector: 'app-crear-nave',
  templateUrl: './crear-nave.component.html'
})
export class CrearNaveComponent{

  naveInfo: NaveInterface = {
    nombre: "",
    peso: 0,
    empuje: 0,
    tipo: "",
    combustible: "",
    velocidadMax: 0
  }

  informacionEspecificaDeTipo!: VehiculoLanzaderaInterface | NaveTripuladaInterface | SondaInterface | SateliteArtificialInterface;

  

  constructor( private naveService: NaveService) {}

  crearNave(){

    this.naveService.agregarNave(this.naveInfo, this.informacionEspecificaDeTipo).subscribe((respuesta:any) => {
      if(respuesta.ok){
        this.naveInfo.nombre = "";
        this.naveInfo.peso = 0;
        this.naveInfo.empuje = 0;
        this.naveInfo.tipo = "";
        this.naveInfo.combustible = "";
        this.naveInfo.velocidadMax = 0;
      }
      this.naveService.obtenerNaves('todos');
    });
    
  }

  actualizarInformacion( informacionAdicional:  VehiculoLanzaderaInterface | NaveTripuladaInterface | SondaInterface | SateliteArtificialInterface){
    this.informacionEspecificaDeTipo = informacionAdicional;
  }

}
