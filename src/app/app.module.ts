import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{routing,appRoutingProviders} from'./app.routing';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RegistrarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
