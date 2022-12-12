import { Component, OnInit } from '@angular/core';
import { AlimentosService } from '../Serviços/alimentos.service';

@Component({
  selector: 'app-dados-nutricionais',
  templateUrl: './dados-nutricionais.component.html',
  styleUrls: ['./dados-nutricionais.component.css']
})
export class DadosNutricionaisComponent implements OnInit{
  
  
  constructor(private alimentosService:AlimentosService) {}
  
  ngOnInit() {}



}



