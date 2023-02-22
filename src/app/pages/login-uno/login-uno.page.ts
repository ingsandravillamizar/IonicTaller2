import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { MiprimerserviceService } from 'src/app/services/miprimerservice.service';

@Component({
  selector: 'app-login-uno',
  templateUrl: './login-uno.page.html',
  styleUrls: ['./login-uno.page.scss'],
})

export class LoginUnoPage implements OnInit {
  password:string="";
  user:string= "";
  logeado:boolean =false;
  constructor( private mservice: MiprimerserviceService) {
    
  }

  ngOnInit() {
  }

  onSubmit(){  }


  login( user1:string, password1:String){
    return new Promise((resolve, reject)=>{
      if(user1==this.user && password1== this.password){
        this.logeado = true;
        resolve(true);

      } else {
        this.logeado = false;
        reject(false);
      }
    })

  }

}
