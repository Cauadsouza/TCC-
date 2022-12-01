import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContagemCaloricaComponent } from './contagem-calorica/contagem-calorica.component';
import { DadosNutricionaisComponent } from './dados-nutricionais/dados-nutricionais.component';
import { ExerciciosFisicosComponent } from './exercicios-fisicos/exercicios-fisicos.component';
import { IndexComponent } from './index/index.component';
import { InfoNutricionaisComponent } from './info-nutricionais/info-nutricionais.component';
import { PlanosAlimentaresComponent } from './planos-alimentares/planos-alimentares.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'dadosnutri', component: DadosNutricionaisComponent},
  {path: 'exercicios', component: ExerciciosFisicosComponent},
  {path: 'infonutri', component: InfoNutricionaisComponent},
  {path: 'contagem', component: ContagemCaloricaComponent},
  {path: 'planosIF', component: PlanosAlimentaresComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
