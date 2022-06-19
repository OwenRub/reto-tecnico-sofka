import {NaveInterface} from './naveInterfaces.interface';


export class Nave{

  private nombre: string;
  private peso: number;
  private empuje: number;
  private tipo: string;
  private combustible: string;
  private velocidadMax: number;

  constructor({nombre, peso, empuje, tipo, combustible, velocidadMax}: NaveInterface){
    this.nombre = nombre;
    this.peso = peso;
    this.empuje = empuje;
    this.tipo = tipo;
    this.combustible = combustible;
    this.velocidadMax = velocidadMax;
  }

  // Reporte simple que será sobrescrito por las clases hijas
  generarReporte(): string{
    return `La nave ${this.nombre} encontrada en inventario alcanza una velocidad máxima de ${this.velocidadMax} Km/h.`;
  }
  // Método que genera un valor de nave ficticio de acuerdo a ciertos parámetros, sobrescrito por clases hijas
  deducirValor(): number{
    return 85000 * this.empuje + 137000 * this.peso;
  }

  // GETTERS
  get getNombre(): string{
    return this.nombre;
  }
  get getPeso(): number{
    return this.peso;
  }
  get getTipo(): string{
    return this.tipo;
  }
  get getEmpuje(): number{
    return this.empuje;
  }
  get getCombustible(): string{
    return this.combustible;
  }
  get getVelocidadMax(): number{
    return this.velocidadMax;
  }

  // SETTERS
  set setNombre(nombre: string){
    this.nombre = nombre;
  }
  set setPeso(peso: number){
    this.peso = peso;
  }
  set setTipo(tipo: string){
    this.tipo = tipo;
  }
  set setEmpuje(empuje: number){
    this.empuje = empuje;
  }
  set setCombustible(combustible: string){
    this.combustible = combustible;
  }
  set setVelocidadMax(velocidadMax: number){
    this.velocidadMax = velocidadMax;
  }
}