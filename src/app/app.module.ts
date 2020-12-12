import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule} from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Ng2SearchPipeModule}  from 'ng2-search-filter';
import { SearchfilterPipe } from './searchfilter.pipe';
import { DetailsComponent } from './details/details.component';
import { PerteComponent } from './perte/perte.component';
@NgModule({
  declarations: [
    AppComponent,
    AdoptionComponent,
    AcceuilComponent,
    FormulaireComponent,
    SearchfilterPipe,
    DetailsComponent,
    PerteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { 



}
