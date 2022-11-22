import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/Serviços/alimentos.service';
import { DadosNutricionais } from 'src/Serviços/Alimentos';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dados-nutricionais',
  templateUrl: './dados-nutricionais.component.html',
  styleUrls: ['./dados-nutricionais.component.css']
})
export class DadosNutricionaisComponent implements OnInit{
  dados: DadosNutricionais[];
  pesquisa = new FormControl('');
  constructor(private Dados: AlimentosService) {
    this.dados = []
  }

  ngOnInit() {
    this.Dados.obterDados("").subscribe((res) => {
      this.dados = res.dados;
    });
  }

  pesquisar(): void {
    this.Dados.obterDados(this.pesquisa.value).subscribe((res) => {
      this.dados = res.dados;
    });
  }
}
