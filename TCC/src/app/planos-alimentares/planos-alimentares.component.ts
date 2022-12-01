import { Component, OnInit } from '@angular/core';
import { LA } from '../Serviços/lista-alimentos';
import { AlimentosService } from '../Serviços/alimentos.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-planos-alimentares',
  templateUrl: './planos-alimentares.component.html',
  styleUrls: ['./planos-alimentares.component.css']
})
export class PlanosAlimentaresComponent implements OnInit {
  alimento = {} as LA;
  AlimentosIF: LA[] = [];
  

  constructor(private alimentosService:AlimentosService) {}
  

  ngOnInit() {
    this.getAlimentosIF();
  }

  getAlimentosIF(){
    this.alimentosService.getAlimentosIF().subscribe((AIF: LA[]) => {
      this.AlimentosIF = AIF;
    });
  }

}
