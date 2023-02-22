import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaLibros :Array<Libro>;
  listaFiltrados :Array<Libro>;
  libro:Libro;
 
  constructor(private alertController: AlertController) {
    this.listaLibros = [{titulo:"Cien años de soledad", precio:10, descripcion :"drama",slug :"cien",tipo:"digital"},
    {titulo:"Cronica de una muerte anunciada", precio:20, descripcion :"thriller",slug :"cien",tipo:"fisico"}
  ];
    this.listaFiltrados =  this.listaLibros;
    this.libro = new Libro;
  }


//   export class Libro {
//     titulo:string = "";
//     precio:number = 0;
//     tipo:string="";
//     descripcion:string="";
//     slug:string="";
// }


  //data:NgForm es para saber que hay dentrro de data.  tengo acceso a muchas cosas
  guardar(data:NgForm){ 
    //esto valida que el  formularlio realmente sea valido porque lo pueden hackear por inspeeccion
    if (data.form.invalid){
         data.resetForm();
         return;
        }
     this.presentAlert(data);  
     //data.resetForm();
  }


   async presentAlert(form: any) {
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
                this.nuevoLibro(form);
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
  

  
  nuevoLibro(form1:any) { 
    this.listaLibros.push ( this.libro ); 
    this.libro = new Libro;
      form1.resetForm();
      this.listaFiltrados= this.listaLibros;
   
  }

  busqueda(value:any){
    this.listaFiltrados = this.listaLibros.filter(item=>{
    return item.titulo.toLowerCase().indexOf(value.toLowerCase())>-1 ||
    item.slug.toLowerCase().indexOf(value.toLowerCase())>-1
    item.descripcion.toLowerCase().indexOf(value.toLowerCase())>-1;

    });
  }
 

}


 