import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DadosNutricionaisComponent } from './dados-nutricionais/dados-nutricionais.component';
import { AlimentosService } from 'src/Serviços/alimentos.service';

@NgModule({
  declarations: [
    AppComponent,
    DadosNutricionaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlimentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
