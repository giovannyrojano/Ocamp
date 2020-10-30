import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{PersonaService}from '../../services/persona.service';
import{Persona} from '../../Models/persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public persona: Persona = new Persona(undefined, "", "","");
  constructor(
    private personaService:PersonaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get("id");
    this.personaService.getPersona(parseInt(id)).
    subscribe((response: Persona) => this.persona = response)
  }

  onSubmit(){
    this.personaService.updatePersona(this.persona).
    subscribe( response=> {
      alert("Actualizado con Exito");
        this.router.navigate(['/']);
        console.log("OK");
      },
      err=>{
        console.log(  "Algo salio Mal");
      }
      );
  }
  }

