import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DadosNutricionaisComponent } from './dados-nutricionais/dados-nutricionais.component';
import { AlimentosService } from './Serviços/alimentos.service';
import { ContagemCaloricaComponent } from './contagem-calorica/contagem-calorica.component';
import { IndexComponent } from './index/index.component';
import { ExerciciosFisicosComponent } from './exercicios-fisicos/exercicios-fisicos.component';
import { InfoNutricionaisComponent } from './info-nutricionais/info-nutricionais.component';
import { PlanosAlimentaresComponent } from './planos-alimentares/planos-alimentares.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosNutricionaisComponent,
    ContagemCaloricaComponent,
    IndexComponent,
    ExerciciosFisicosComponent,
    InfoNutricionaisComponent,
    PlanosAlimentaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlimentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
