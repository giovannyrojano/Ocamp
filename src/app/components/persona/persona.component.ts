import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{PersonaService} from '../../services/persona.service';
import{ Persona} from '../../Models/persona';




@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[PersonaService]
})
export class PersonaComponent implements OnInit {

  public personas:Persona[];

  constructor(private _personaService: PersonaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.ListarPersona();
    console.log(this.personas);

    
  }


  prueba(){
    return this._personaService.test();
  }
  clic(){
    console.log("prueba clic");
  }
  ListarPersona() {
    return this._personaService
      .getPersonas()
      .subscribe((response:Persona[])=>{
        this.personas=response;
      });
  }

  EliminarPersona(persona: Persona) {
  return this._personaService.deletePersona(persona).subscribe(
    response=>{
      console.log("algo paso");
      alert("eliminado con exito");
      this.router.navigate(['home']);
    },
    err=>
    {
      console.log("error")
    }
  );
}

EditarPersona(persona: Persona) {
  this.router.navigate(['/editar/'+persona.id]);
 /*
  return this._personaService.updatePersona(persona).subscribe(
    response=>{
      console.log("algo paso");
    },
    err=>
    {
      console.log("error")
    }
  );
  */
}



}
