import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { DetailsComponent } from './details/details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PerteComponent } from './perte/perte.component';

const routes: Routes = [
  { path: 'adoption', component: AdoptionComponent ,
  children: [
    { path: 'details', component: DetailsComponent }
  ] },
  {path: 'perte', component: PerteComponent},
  { path: 'home', 
  component: AcceuilComponent,
  children: [
  { path: 'Formulaire', component: FormulaireComponent }
] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
