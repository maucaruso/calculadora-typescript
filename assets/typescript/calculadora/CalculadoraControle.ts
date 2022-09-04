import { DataHora } from "./DataHora.js";
import { Tela } from "./Tela.js";

export class CalculadoraControle {
  
  constructor(
    private tela = new Tela()
  ) {
  
    new DataHora();
    
  }
  
}