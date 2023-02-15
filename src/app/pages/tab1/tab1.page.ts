import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaLibros :Array<any>;
  lista:Libro;
  constructor(private alertController: AlertController) {
    this.listaLibros = [];
    this.lista = new (Libro);
  }




  
  
 


 
  guardar(form:any){
 
     this.presentAlert(form);
    
    

   }


   async presentAlert(form1:any) {
    var alert = await this.alertController.create (
      {
        header:'Nuevo Libro',
        subHeader: 'Importante! '  ,
        message:'Está seguro de Enviar?',
        //buttons:['ok','Cancelar']
        buttons:[
          {
            text:'Aceptar',
            role:'Aceptar',
            handler:()=>{
                // console.log(form1);
                this.nuevoLibro(form1);
            }
          },
          {
            text:'Cancelar', 
            
             
            
          }
        ],
  
       
      }
    );
  
    alert.present();
  }
  

  
  nuevoLibro(form2:any){

    //this.lista = new(this.loginForm.value);
    this.listaLibros.push (
      {titulo:form2.titulo,precio:form2.precio,tipo:form2.tipo,descripcion:form2.descripcion,slug:form2.slug }
    );
   

  }

}


 