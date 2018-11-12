import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `.highlight {
      background-color: yellow;
      font-weight: bold;
    }`
  ]
})
export class DataBindingComponent implements OnInit {


  url: string = 'http:/loiane.com';
  cursoAngular = true;
  urlImagem = 'https://loremflickr.com/320/240';
  valorAtual: string = '';
  valorSalvo: any = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }



  onMudouValor(evento) {
    console.log(evento);
  }

  constructor() { }

  ngOnInit() {
  }



}
