import { Component, OnInit, Output } from '@angular/core';
import { NaveService } from 'src/app/controlador/nave.service';

@Component({
  selector: 'app-buscar-nave',
  templateUrl: './buscar-nave.component.html'
})
export class BuscarNaveComponent implements OnInit {

  userInput: string = "";
  tipo: string = "todos";

  constructor(private naveService: NaveService) { }

  ngOnInit(): void {
    this.actualizarLista();
  }

  actualizarLista(){
    this.naveService.obtenerNaves(this.tipo);
    this.userInput = "";
  }
  filtrarNaves(){
    this.naveService.filtrarNaves(this.userInput.trim());
  }
}
