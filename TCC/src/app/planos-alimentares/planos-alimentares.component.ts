import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planos-alimentares',
  templateUrl: './planos-alimentares.component.html',
  styleUrls: ['./planos-alimentares.component.css']
})
export class PlanosAlimentaresComponent implements OnInit {
  alimentos: string[];

  constructor() { 
    this.alimentos = [
      
    ]
  }

  ngOnInit(): void {
  }

}
