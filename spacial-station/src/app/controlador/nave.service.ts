import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nave } from '../modelo/Nave';
import { NaveInterface, NaveTripuladaInterface, SateliteArtificialInterface } from '../modelo/naveInterfaces.interface';
import { SondaInterface, VehiculoLanzaderaInterface } from '../modelo/naveInterfaces.interface';
import { CrearNave } from './CrearNave';

@Injectable({
  providedIn: 'root'
})
export class NaveService {

  private _naves: Nave[] = [];
  private _navesFiltradas: Nave[] = [];
  private _appCrearNave: CrearNave = new CrearNave();
  private _apiUrl: string = 'https://gateway-estacion-sofka.herokuapp.com/api';


  constructor( private http: HttpClient) { }

  agregarNave(
    naveInfo: NaveInterface, 
    informacionEspecificaDeTipo: VehiculoLanzaderaInterface | NaveTripuladaInterface | SondaInterface | SateliteArtificialInterface
  ){
    const nuevaNave = Object.assign({}, naveInfo, informacionEspecificaDeTipo);
    return this.http.post(this._apiUrl, nuevaNave);
  }

  obtenerNaves(tipo: string){

    this.http.get(`${this._apiUrl}/${tipo === 'todos' ? '' : tipo}`)
      .subscribe( (apiResponse: any) => {
        const navesResponse = apiResponse.map( (nave: any) => this._appCrearNave.crearConObjetoDeApi(nave) );
        this._naves = navesResponse;
        this._navesFiltradas = navesResponse;
        
      });
  }

  filtrarNaves(userInput: string){
    this._navesFiltradas = this._naves.filter(nave => {
      if(!userInput) return true;
      return nave.getNombre.toLowerCase().includes( userInput.toLowerCase() );
    });
  }

  eliminarNave(nombre: string, tipo: string){
    const nombreCodificado = encodeURIComponent(nombre);
    const tipoCodificado = encodeURIComponent(tipo);
    return this.http.delete(`${this._apiUrl}/${nombreCodificado}&${tipoCodificado}`);
  }

  get naves(): Nave[]{
    return [...this._naves];
  }
  get navesFiltradas(): Nave[]{
    return [...this._navesFiltradas];
  }
}
