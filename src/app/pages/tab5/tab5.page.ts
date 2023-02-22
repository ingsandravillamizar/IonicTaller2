import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MiprimerserviceService } from 'src/app/services/miprimerservice.service';

 

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  contador : number;
  datos: Array<Number>=[];
  nom: String = "";
  constructor( private loadingController: LoadingController, private mservice:MiprimerserviceService) { 

    this.contador = 0;
   
  }

 
    //una vez la pagina se crea se ejecuta el ngOnInit
    //ngOnInit se ejecuta al crease la pagina  Aqui inicializamos variables
    //SE EJECUTA UNA VEZ
    ngOnInit():void{
      console.log("Hola desde el init");
    }
  
    //Cuando cierro la aplicacion
    ngOnDestroy(){}

    
    ionViewWillEnter(){
      console.log("Estoy ingresando");
      this.nom = this.mservice.nombre;
    }
  

    ionViewDidEnter(){
      console.log("Entre");
      this.contador ++;
       
    }
  
    ionViewWillLeave(){
      console.log("Voy a dejar");
    }

    //Cuando ya sali de la pagina
    ionViewDidLeave(){
      console.log("La deje");
    }


   
  



    //  asincrona(){
    //   //Ocurre en el orden en que tenga las instrucciones
    //   console.log("Hola");

    //   //Estoy forzando asincrona
    //   setTimeout (()=>{
    //     console.log("Como esta???");
    //   },500);
    //   console.log("Adios");
    //  }

    servidor(): Promise<Array<Number>>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let data =[1,2,3,4]
    
          if(data[3]===4){
            resolve(data);
          }else{ reject(data);}
        },4000);
      })

      
    }


    async asincrona(){
      const loading = await this.loadingController.create({
        message:'Cargando datos',
        //duration:1000,
        spinner:'bubbles'
      });

      await loading.present();
      this.servidor().then((datos1: Array<Number>)=>{
          this.datos = datos1;
          loading.dismiss();  

      }).catch((err)=>{
        console.log("error");
        loading.dismiss(); 

      })    
   }



   async asincronaUno(){
    this.loadingController.create({
      message:'Cargando datos',
      //duration:1000,
      spinner:'bubbles'
    }).then((loading)=>{
      loading.present();
      this.servidor().then((data)=>{
        this.datos = data;
        loading.dismiss
      })
    });    
 }



}
