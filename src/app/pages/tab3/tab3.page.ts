import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  lista:Array<any>;
  listaFiltrados:Array<any>;
  constructor() { 
    this.lista = ["javascript", "C++", "Java", "Python", "R", "C#", "SQL", "HTML", "CSS", "typescript", "bash"];
    this.listaFiltrados = this.lista;
  }

  ngOnInit() {
  }

  busqueda(valor:any){

    this.listaFiltrados = this.lista.filter(item=>{
    return item.toLowerCase().indexOf(valor.toLowerCase())>-1;

    });
  }


}
