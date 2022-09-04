import { DataHora } from "./DataHora.js";
import { Tela } from "./Tela.js";

export class CalculadoraControle {

  constructor(
    private tela = new Tela()
  ) {

    new DataHora();

    this.eventosBotoes();

  }

  eventosBotoes(): void {

    document.querySelectorAll("#teclado button").forEach(elemento => {
      elemento.addEventListener("click", (evento: Event) => {

        const target = evento.target as HTMLButtonElement;

        switch (target.id) {
          case "zero":
          case "um":
          case "dois":
          case "tres":
          case "quatro":
          case "cinco":
          case "seis":
          case "sete":
          case "oito":
          case "nove":
            this.adicionarNumero(Number(target.dataset.valor));
          break;
          
          case "adicao":
          case "subtracao":
          case "divisao":
          case "multiplicacao":
          break;
          
          case "ponto":
          break;
          
          case "limpar":
          break;
          
          case "desfazer":
          break;
          
          case "porcentagem":
          break;
          
          case "igual":
          break;
        }

      })
    });

  }
  
  adicionarNumero(numero: number): void {
    this.tela.conteudo = numero.toString();
  }

}