import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ValidatorEspaciosValidator } from 'src/app/directives/validar-espacios.directive';
import { Libro } from 'src/app/models/libro';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  formLibro: FormGroup;
  // libro:Libro;
  listaLibros :Array<Libro>;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
    this.formLibro = this.formBuilder.group(
      {
        //incluyo los formControlName del formulaio
        titulo:['',  [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
        precio:['',[Validators.required,Validators.min(0),Validators.max(200)]],
        tipo:['',[Validators.required]],
        descripcion:['',[Validators.required]], 
        slug:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),ValidatorEspaciosValidator(/ /i)]]
        

        
      }
    ),
    // this.libro = new Libro;
    this.listaLibros = [];

  }

  

  onSubmit() { this.presentAlert(); }
  nuevoLibro( ){   this.listaLibros.push ( this.formLibro.value);  }


  async presentAlert() {
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
                // console.log(this.formLibro.value);
                this.nuevoLibro();
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


 
  //getters
  get tituloctrl(){ return this.formLibro.get('titulo') }
  get precioctrl(){ return this.formLibro.get('precio') }
  get tipoctrl(){ return this.formLibro.get('tipo') }
  get descctrl(){ return this.formLibro.get('descripcion') }
  get slugctrl(){ return this.formLibro.get('slug') }

  ngOnInit(): void {
    //Consultar Api para llena datos
 
  }

   

}
