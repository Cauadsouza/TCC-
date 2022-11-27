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
  alimentos: LA[] = [];
  
  constructor(private alimentosService:AlimentosService) {}
  
  ngOnInit() {
    this.getAlimentos();
  }

  // defini se um carro será criado ou atualizado
  saveAlimento(form: NgForm) {
    if (this.alimento.id !== undefined) {
      this.alimentosService.updateAlimento(this.alimento).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.alimentosService.saveAlimento(this.alimento).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  getAlimentos() {
    this.alimentosService.getAlimentos().subscribe((alimentos: LA[]) => {
      this.alimentos = alimentos;
    });
  }

  // deleta um carro
  deleteAlimento(alimento: LA) {
    this.alimentosService.deleteAlimento(alimento).subscribe(() => {
      this.getAlimentos();
    });
  }

  // copia o carro para ser editado.
  editAlimento(alimento: LA) {
    this.alimento = { ...alimento };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getAlimentos();
    form.resetForm();
    this.alimento = {} as LA;
  }

}



