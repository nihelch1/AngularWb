import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GuideComponent } from './guide/guide.component';
import { PerteComponent } from './perte/perte.component';

const routes: Routes = [
  { path: 'adoption', component: AdoptionComponent },
  {path: 'perte', component: PerteComponent},
  {path: 'conseils', component: GuideComponent},
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
