import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/Serviços/alimentos.service';
import { DadosNutricionais } from 'src/Serviços/Alimentos';

@Component({
  selector: 'app-dados-nutricionais',
  templateUrl: './dados-nutricionais.component.html',
  styleUrls: ['./dados-nutricionais.component.css']
})
export class DadosNutricionaisComponent{
  constructor(private Dados: AlimentosService) {}
  dados: DadosNutricionais[];

}
