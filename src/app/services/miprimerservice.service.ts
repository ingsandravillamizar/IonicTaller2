//ionic g service services/miprimerservice


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiprimerserviceService {
  nombre:string;
  
  usuario = "user1";
  password= "1234";
  logeado = false;
  constructor() {
    this.nombre = "";
   }
}
