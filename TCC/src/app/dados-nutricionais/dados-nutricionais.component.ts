import { Component, OnInit } from '@angular/core';
import { LA } from '../Serviços/lista-alimentos';
import { AlimentosService } from '../Serviços/alimentos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dados-nutricionais',
  templateUrl: './dados-nutricionais.component.html',
  styleUrls: ['./dados-nutricionais.component.css']
})
export class DadosNutricionaisComponent implements OnInit{
  
  alimento = {} as LA;
  bebidas: LA[] = [];
  carnes: LA[] = [];
  doces: LA[] = [];
  frutas: LA[] = [];
  vegetais: LA[] = [];
  
  constructor(private alimentosService:AlimentosService) {}
  
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

}



