import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from "../Models/persona";
import { environment } from "../../environments/environment"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  test(){
      return console.log("prueba");
  }
  getPersonas():Observable<any> {
    return this.http.get(`${this.baseUrl}persona/getAll.php`);
  }
  getPersona(id:number){
      return this.http.get(`${this.baseUrl}persona/getPersona.php?id=${id}`)
  }

  addPersona(persona:Persona){
    return this.http.post(`${this.baseUrl}persona/add.php`, persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete(`${this.baseUrl}persona/delete.php?id=${persona.id}`);
  }
  updatePersona(persona:Persona){
    return this.http.put(`${this.baseUrl}persona/update.php`,persona);
  }

}