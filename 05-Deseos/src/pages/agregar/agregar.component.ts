

import {Component} from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl:'agregar.component.html'
})
export class AgregarPage {
    lista:Lista;
    nombreItem:string = '';

    constructor(public deseosService:DeseosService, private navParams:NavParams){
       
        const title = this.navParams.get('titulo');
        if (this.navParams.get('lista')) {
            this.lista =this.navParams.get('lista');
        }else{
            this.lista = new Lista(title);
            this.deseosService.addList(this.lista);
        }
    }

    addItem(){
        if (this.nombreItem.length === 0) {
            return;
        }
        //console.log(this.nombreItem);
        const newItem = new ListaItem(this.nombreItem);
        this.lista.items.push(newItem);
        this.deseosService.saveStorage();
        this.nombreItem = '';
    }
    updateTask(item:ListaItem){
        item.completado = !item.completado;
        
        const pendientes = this.lista.items.filter( itemData =>{
            return !itemData.completado;
        }).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else{
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }
        this.deseosService.saveStorage();
    }
    
    delete(idx:number){
        this.lista.items.splice(idx,1);
        this.deseosService.saveStorage();
    }
   
}