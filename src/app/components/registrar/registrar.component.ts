import { Component, OnInit } from '@angular/core';
import{Persona} from '../../Models/persona';
import{PersonaService}from '../../services/persona.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }
  personaModel = new Persona(undefined, "","","");

  onSubmit(){
    this.personaService.addPersona(this.personaModel).subscribe(
  response=>{
alert("Guardado con exito");
this.personaModel= new Persona(undefined,"","","");
  }, err=>{
    alert("ERROR no se pudo guardar");
  }
  
    );
  }
}
