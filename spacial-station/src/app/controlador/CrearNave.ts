import { NaveInterface, NaveTripuladaInterface, SateliteArtificialInterface } from "../modelo/naveInterfaces.interface";
import {SondaInterface, VehiculoLanzaderaInterface } from "../modelo/naveInterfaces.interface";
import { NaveTripulada } from "../modelo/NaveTripulada";
import { SateliteArtificial } from "../modelo/SateliteArtificial";
import { Sonda } from "../modelo/Sonda";
import { VehiculoLanzadera } from "../modelo/VehiculoLanzadera";

export class CrearNave{

  // Crea los objetos de tipo especifico usando dos piezas (objetos) de información que introdujo el usuario
  // El primero es información general de la nave, el segundo es la información relativa al tipo de nave
  crear(
    naveInfo: NaveInterface, 
    informacionEspecificaDeTipo: any
  ){
    switch(naveInfo.tipo){
      case 'Vehiculo Lanzadera':
        return this.crearLanzadera(naveInfo, informacionEspecificaDeTipo);
      case 'Sonda':
        return this.crearSonda(naveInfo, informacionEspecificaDeTipo);
      case 'Satelite Artificial':
        return this.crearSatelite(naveInfo, informacionEspecificaDeTipo);
      default:
        return this.crearNaveTripulada(naveInfo, informacionEspecificaDeTipo);
    }
  }

  // Sobrecarga del método crear. Discrimina la pieza de información completa proveniente del servidor en
  // dos partes: info general e info relacionada con el tipo de nave, luego crea y retorna la instancia
  crearConObjetoDeApi(
    infoCombinada: any
  ){
    const naveInfo: NaveInterface = {
      nombre: infoCombinada.nombre,
      peso: infoCombinada.peso,
      empuje: infoCombinada.empuje,
      tipo: infoCombinada.tipo,
      combustible: infoCombinada.combustible,
      velocidadMax: infoCombinada.velocidadMax
    }

    const informacionEspecificaDeTipo: any = {};
    for(const key in infoCombinada){
      if(!(key in naveInfo)) informacionEspecificaDeTipo[key] = infoCombinada[key];
    }

    return this.crear(naveInfo, informacionEspecificaDeTipo);
  }

  // Funciones para instanciar tipos de nave especificos
  private crearLanzadera(naveInfo: NaveInterface, infoEspecifica: VehiculoLanzaderaInterface){
    return new VehiculoLanzadera(naveInfo, infoEspecifica);
  }
  private crearSonda(naveInfo: NaveInterface, infoEspecifica: SondaInterface){
    return new Sonda(naveInfo, infoEspecifica);
  }
  private crearSatelite(naveInfo: NaveInterface, infoEspecifica: SateliteArtificialInterface){
    return new SateliteArtificial(naveInfo, infoEspecifica);
  }
  private crearNaveTripulada(naveInfo: NaveInterface, infoEspecifica: NaveTripuladaInterface){
    return new NaveTripulada(naveInfo, infoEspecifica);
  }

}