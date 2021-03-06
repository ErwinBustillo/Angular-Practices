import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';


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
    email:"erwinb1996@gmail.com",
    pasatiempos:[null]
  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre':new FormControl('',[Validators.required,
          Validators.minLength(3)]),
          'apellido': new FormControl('',[Validators.required,this.noHerrera])
      }),      
      'email': new FormControl('',[Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'pasatiempos': new FormArray([
        new FormControl('correr',Validators.required)
      ]),
      'username': new FormControl('',Validators.required,this.exist),
      'pass1': new FormControl('',Validators.required),
      'pass2': new FormControl()
    })
    //this.forma.setValue(this.usuario);

    this.forma.controls['pass2'].setValidators([
      Validators.required,
      this.noEquals.bind(this.forma)
    ])

    this.forma.controls['username'].valueChanges.subscribe(data =>{
      console.log(data);
    });

    this.forma.controls['username'].statusChanges.subscribe(data =>{
      console.log(data);
    })


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

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  noHerrera(control:FormControl):{[s:string]:boolean }{
      if (control.value === "herrera") {
        return {
          "noherrera":true
        }
      }
      return null;
  }

  noEquals(control:FormControl):{[s:string]:boolean }{

    let forma:any = this;

    if (control.value != forma.controls['pass1'].value) {
      return {
        "noequals":true
      }
    }
    return null;
  }

  exist(control:FormControl): Promise<any> | Observable<any>{
    let promise = new Promise(
      (resolve,reject)=>{
        setTimeout(() => {
          if (control.value === "strider") {
            resolve({existe:true})
          }else{
            resolve(null)
          }
        }, 3000);
      }
    )
    return promise;
  }

}
