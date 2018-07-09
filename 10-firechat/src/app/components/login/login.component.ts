import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private _cs:ChatService) {

   }

  ingresar(proveedor:string){
    console.log(proveedor);
    this._cs.login(proveedor)
  }

}
