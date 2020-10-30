import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { from } from 'rxjs';


//impotando los componentes.

import { PersonaComponent } from './components/persona/persona.component';
import{RegistrarComponent} from './components/registrar/registrar.component';
import { EditarComponent } from './components/editar/editar.component';

//
const appRoutes:Routes=[
{path:'', component:PersonaComponent},
{path:'home', component:PersonaComponent},
{path:'registrar', component:RegistrarComponent},
{ path: "editar/:id", component: EditarComponent},
{path:'**',component:PersonaComponent}
];


export const appRoutingProviders:any[]=[];

export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
