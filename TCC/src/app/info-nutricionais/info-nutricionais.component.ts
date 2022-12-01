import { Component, OnInit } from '@angular/core';
import { LA } from '../Serviços/lista-alimentos';
import { AlimentosService } from '../Serviços/alimentos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-nutricionais',
  templateUrl: './info-nutricionais.component.html',
  styleUrls: ['./info-nutricionais.component.css']
})
export class InfoNutricionaisComponent implements OnInit {
  alimento = {} as LA;
  bebidas: LA[] = [];
  carnes: LA[] = [];
  doces: LA[] = [];
  frutas: LA[] = [];
  vegetais: LA[] = [];
  displayB = 'card-b'
  displayC = 'card-c'
  displayD = 'card-d'
  displayF = 'card-f'
  displayV = 'card-v'
  
  constructor(private alimentosService:AlimentosService) {}
  
  /*API CONECTION*/

  ngOnInit() {
    this.getBebidas();
    this.getCarnes();
    this.getDoces();
    this.getFrutas();
    this.getVegetais();
  }

  getBebidas() {
    this.alimentosService.getBebidas().subscribe((bebidas: LA[]) => {
      this.bebidas = bebidas;
    });
  }
  getCarnes() {
    this.alimentosService.getCarnes().subscribe((carnes: LA[]) => {
      this.carnes = carnes;
    });
  }

  getDoces() {
    this.alimentosService.getDoces().subscribe((doces: LA[]) => {
      this.doces = doces;
    });
  }

  getFrutas() {
    this.alimentosService.getFrutas().subscribe((frutas: LA[]) => {
      this.frutas = frutas;
    });
  }

  getVegetais() {
    this.alimentosService.getVegetais().subscribe((vegetais: LA[]) => {
      this.vegetais = vegetais;
    });
  }

  /*EXIBIR TABELA*/

  ExibirB(){
    this.displayB='flex';
    this.displayC='none';
    this.displayD='none';
    this.displayF='none';
    this.displayV='none';
  }

  ExibirC(){
    this.displayC='flex'
    this.displayB='none';
    this.displayD='none';
    this.displayF='none';
    this.displayV='none';
  }

  ExibirD(){
    this.displayD='flex'
    this.displayB='none';
    this.displayC='none';
    this.displayF='none';
    this.displayV='none';
  }

  ExibirF(){
    this.displayF='flex'
    this.displayC='none';
    this.displayB='none';
    this.displayD='none';
    this.displayV='none';
  }

  ExibirV(){
    this.displayV='flex'
    this.displayB='none';
    this.displayC='none';
    this.displayD='none';
    this.displayF='none';
  }

}
