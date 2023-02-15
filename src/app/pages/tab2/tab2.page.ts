import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ValidatorEspaciosValidator } from 'src/app/directives/validar-espacios.directive';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  formLibro: FormGroup;
  lista:Libro;

  listaLibros :Array<any>;
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
    this.lista = new (Libro);
    this.listaLibros = [];
  }

  ngOnInit() {
  }

  onSubmit() {

    this.presentAlert();
  }



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
                console.log(this.formLibro.value);
                this.nuevoLibro(this.formLibro.value);
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


  nuevoLibro(form:any){

    //this.lista = new(this.loginForm.value);
    this.listaLibros.push (
      {titulo:form.titulo,precio:form.precio,tipo:form.tipo,descripcion:form.descripcion,slug:form.slug }
    );
   

  }
  //getters
  get tituloctrl(){ return this.formLibro.get('titulo') }
  get precioctrl(){ return this.formLibro.get('precio') }
  get tipoctrl(){ return this.formLibro.get('tipo') }
  get descctrl(){ return this.formLibro.get('descripcion') }
  get slugctrl(){ return this.formLibro.get('slug') }


}
