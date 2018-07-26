import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:Object = {
    nombrecompleto: {
      nombre:"Erwin",
      apellido:"B"
    },
    email:"erwinb1996@gmail.com"
  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre':new FormControl('',[Validators.required,
          Validators.minLength(3)]),
          'apellido': new FormControl('',Validators.required)
      }),      
      'email': new FormControl('',[Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])
    })
    this.forma.setValue(this.usuario);
  }

  saveChanges(){
    console.log(this.forma.value);
    this.forma.reset({
      nombrecompleto:{
        nombre:"",
        apellido:""
      },
      email:""
    });
  }

}
