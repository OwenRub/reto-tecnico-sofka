import { Component } from '@angular/core';
import { NaveService } from 'src/app/controlador/nave.service';
import { Nave } from '../../../modelo/Nave';

@Component({
  selector: 'app-naves-lista',
  templateUrl: './naves-lista.component.html'
})
export class NavesListaComponent {


  constructor( private naveService: NaveService ) {
  }

  eliminarNave(nombre: string, tipo: string){
    this.naveService.eliminarNave(nombre, tipo).subscribe((respuesta: any) => {
      if(respuesta.ok){
        console.log(`Nave ${nombre} eliminada`);
        this.naveService.obtenerNaves('todos');
      }
    })
  }

  get naves(): Nave[]{
    return [...this.naveService.navesFiltradas];
  }
}
