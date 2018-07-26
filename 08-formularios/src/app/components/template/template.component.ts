import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {

  usuario:Object ={
    nombre:"Erwin",
    apellido:"B",
    email:""
  };
  constructor() { }

 

  guardar(forma:NgForm){
    console.log("ngform",forma);
    console.log("valor",forma.value);
  }

}
