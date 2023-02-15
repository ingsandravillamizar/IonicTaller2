import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.scss'],
})
export class MycardComponent implements OnInit {
  @Input() listaRec:Libro;
  @Input() listaRec1: Array<any>;
  constructor() { 
    this.listaRec=new(Libro);
    this.listaRec1=[];
  }

  ngOnInit() {}

}



