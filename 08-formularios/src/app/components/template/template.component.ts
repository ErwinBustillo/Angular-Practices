import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles:[`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario:Object ={
    nombre:null,
    apellido:null,
    email:null,
    pais:""
  };

  paises = [{
    codigo:"COL",
    nombre:"Colombia"
  },{
    codigo:"BRA",
    nombre:"Brasil"
  }]
  constructor() { }

 

  guardar(forma:NgForm){
    console.log("ngform",forma);
    console.log("valor",forma.value);
  }

}
