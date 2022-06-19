import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesListaComponent } from './componentes/naves-lista/naves-lista.component';
import { CrearNaveComponent } from './componentes/crear-nave/crear-nave.component';
import { FormsModule } from '@angular/forms';
import { InputLanzaderaComponent } from './componentes/inputs-de-tipo/input-lanzadera/input-lanzadera.component';
import { InputTripuladaComponent } from './componentes/inputs-de-tipo/input-tripulada/input-tripulada.component';
import { InputSondaComponent } from './componentes/inputs-de-tipo/input-sonda/input-sonda.component';
import { InputSateliteComponent } from './componentes/inputs-de-tipo/input-satelite/input-satelite.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { BuscarNaveComponent } from './componentes/buscar-nave/buscar-nave.component';


@NgModule({
  declarations: [
    NavesListaComponent,
    CrearNaveComponent,
    InputLanzaderaComponent,
    InputTripuladaComponent,
    InputSondaComponent,
    InputSateliteComponent,
    PaginaPrincipalComponent,
    BuscarNaveComponent
  ],
  exports: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VistaModule { }
