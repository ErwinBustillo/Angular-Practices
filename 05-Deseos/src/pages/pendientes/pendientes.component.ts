import { NavController, AlertController } from 'ionic-angular';
import {Component} from '@angular/core';
import { DeseosService } from './../../services/deseos.service';
import { AgregarPage } from '../agregar/agregar.component';
import { Lista } from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl:'pendientes.component.html'
})
export class PendientesPage {
    
    constructor(public deseosService:DeseosService,
        private navCtrl:NavController,
        private alertCtrl:AlertController){

    }

    listaSeleccionada(lista:Lista){
        console.log(lista);
    }

    agregarLista(){
        //this.navCtrl.push(AgregarPage);
        const alert = this.alertCtrl.create({
            title:'Nueva Lista',
            message: 'Nombre de la nueva lista',
            inputs:[{
               name:'titulo',
               placeholder:'Nombre de la lista' 
            }],
            buttons: [
                {
                  text: 'Cancel',
                  handler: data => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Save',
                  handler: data => {
                      if (data.titulo.length === 0) {
                          return;
                      }
                    this.navCtrl.push(AgregarPage,{
                        titulo:data.titulo
                    });  
                    console.log(data);
                  }
                }
              ]
        });
        alert.present();
    }
}