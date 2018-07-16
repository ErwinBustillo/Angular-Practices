import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { DeseosService } from './../services/deseos.service';
import {Component, Input} from '@angular/core';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar.component';


@Component({
    selector: 'app-listas',
    templateUrl:'listas.component.html'
})
export class ListasComponent {

    @Input() terminada:boolean = false;

    constructor(public deseosService:DeseosService, 
        private navCtrl:NavController,
        private alertCtrl:AlertController){

    }

    listaSeleccionada(lista:Lista){
        this.navCtrl.push(AgregarPage,{
            titulo:lista.titulo,
            lista:lista
        });  
    }

    updateList(lista:Lista,slidingItem:ItemSliding){
        slidingItem.close();
        const alert = this.alertCtrl.create({
            title:'Editar Nombre',
            message: 'Editar El nombre de la lista',
            inputs:[{
               name:'titulo',
               placeholder:'Nombre de la lista',
               value:lista.titulo
            }],
            buttons: [
                {
                  text: 'Cancel',
                  handler: data => {
                    //console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Save',
                  handler: data => {
                      if (data.titulo.length === 0) {
                          return;
                      }
                      lista.titulo = data.titulo;
                      this.deseosService.saveStorage();
                  }
                }
              ]
        });
        alert.present();
    }

    deleteList(lista:Lista){
        this.deseosService.deleteList(lista);
    }

}