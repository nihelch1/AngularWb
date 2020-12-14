import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule} from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Ng2SearchPipeModule}  from 'ng2-search-filter';
import { SearchfilterPipe } from './searchfilter.pipe';
import { PerteComponent } from './perte/perte.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditFormComponent } from './edit-form/edit-form.component';
import { GuideComponent } from './guide/guide.component';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    AdoptionComponent,
    AcceuilComponent,
    FormulaireComponent,
    SearchfilterPipe,
    PerteComponent,
    EditFormComponent,
    GuideComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { 



}
