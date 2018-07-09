import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit  {
  
  mensaje:string ="";
  
  elemento:any;
  constructor(private _cs:ChatService) {
    this._cs.loadMessages()
    .subscribe( () =>{

      setTimeout(() => {
        
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }
  
  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }


  enviar_mensaje(){
    console.log(this.mensaje);
    if(this.mensaje.length === 0) return;
    this._cs.addMessages(this.mensaje)
    .then(()=> this.mensaje = "")
      .catch((err)=> console.error(err.message));
  }
}
