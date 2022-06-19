export interface NaveInterface{
  nombre: string;
  peso: number;
  empuje: number;
  tipo: string;
  combustible: string;
  velocidadMax: number;
}

export interface VehiculoLanzaderaInterface{
  capacidadDeCarga: number;
  cargaUtil: string;
  cargaSujeta: boolean;
  cantidadPropulsores: number;
}

export interface NaveTripuladaInterface{
  capacidadPasajeros: number;
  proposito: string;
  altitud: number;
}

export interface SondaInterface{
  ubicacionObjetivo: string,
  enOperacion: boolean;
  distanciaDeTierra: number;
  puedeAterrizar: boolean;
  sistemaDeAterrizaje: string;
}

export interface SateliteArtificialInterface{
  ubicacionObjetivo: string,
  enOperacion: boolean;
  altitud: number;
  nivelDeOrbita: string;
}