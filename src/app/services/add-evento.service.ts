import { Injectable } from '@angular/core';
import { AddEvento } from '../model/add-evento';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddEventoService {

  private db = environment.serveAPI;

  constructor(
    protected http:HttpClient
  ) { }

  save(evento:AddEvento){
   return this.http.post(this.db + "eventos",evento)
  }

  getAll(){
    return this.http.get(this.db + "eventos")
  }
}
