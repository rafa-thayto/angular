import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    // Pega o valor dentro do textarea
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert('A tradução está correta');


      // Trocar pergunta da rodada e acrescenta progresso
      if ((this.rodada + 1 ) < this.frases.length) {

        // Progresso
        this.progresso += (100 / this.frases.length);

        // Troca pergunta
        this.rodadaFrase = this.frases[++this.rodada];

      }

    } else {
      alert('A tradução está errada');
    }

  }

}
