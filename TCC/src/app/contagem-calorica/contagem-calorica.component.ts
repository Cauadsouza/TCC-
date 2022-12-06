import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GastoCalorico } from './gasto-calorico';

@Component({
  selector: 'app-contagem-calorica',
  templateUrl: './contagem-calorica.component.html',
  styleUrls: ['./contagem-calorica.component.css']
})
export class ContagemCaloricaComponent implements OnInit {
  GCform: FormGroup;
  resultado: number;
  resultadoPI: string;
  IMC: number;

  constructor(private fb: FormBuilder) { 
    this.resultado = 0;
    this.resultadoPI = "";
    this.IMC = 0;
    this.GCform = this.fb.group({
      peso: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      idade: [0, [Validators.required,Validators.min(1), Validators.max(100)]],
      genero: [0, [Validators.required,Validators.min(1), Validators.max(2)]],
      fator: [0, [Validators.required,Validators.min(1), Validators.max(3)]],
      altura: [0, [Validators.required,Validators.min(1), Validators.max(250)]]
    });
  }

  ngOnInit() {}

  Calcular() {
    let infos = this.GCform.value;
    let bol = new GastoCalorico(infos.peso, infos.genero, infos.idade, infos.fator, infos.altura)
    this.resultado = bol.calcular();
  }

  CalcularPI(){
    let infos = this.GCform.value;
    let bol = new GastoCalorico(infos.peso, infos.genero, infos.idade, infos.fator, infos.altura)
    this.resultadoPI = bol.calcularPI();
  }
  

}
