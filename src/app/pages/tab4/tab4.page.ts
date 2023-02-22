import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit  {
   
  lista:Array<Number>= [];
 
  constructor() {
    this.addItems();
 
   }

   ngOnInit(): void {
   
   }

   loadData(ev: any){
   
    setTimeout(()=>{
      this.addItems();
      (ev as InfiniteScrollCustomEvent).target.complete();

    },1000)
   }
  
   addItems(){
    var inicial = this.lista.length;
    for (let i=inicial; i<=inicial+50; i++){
      this.lista.push(i);
    }
   }



   
}


