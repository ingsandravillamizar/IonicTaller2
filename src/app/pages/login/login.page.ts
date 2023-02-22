import { Component, OnInit } from '@angular/core';
import { MiprimerserviceService } from 'src/app/services/miprimerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name : string = "";
  constructor(private mservice : MiprimerserviceService) { }

  ngOnInit() {
  }

  guardar(){
    this.mservice.nombre = this.name;
   }

}

