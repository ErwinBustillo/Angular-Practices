import { Component } from '@angular/core';
import { Promise, reject } from 'q';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Erwin";

  name= "erwin jose bustiLLO";

  arreglo = [1,2,3,4,5,6,7,8,9];

  phy = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direcccion:{
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('LLego la promesa')
    }, 1000);
  })

  fecha = new Date();

  video = "mOeSfOJrUIk";

  activar: boolean = true;

}
