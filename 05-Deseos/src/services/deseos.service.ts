import { Injectable } from "@angular/core";
import { Lista } from '../models';

@Injectable()
export class DeseosService {
    
    listas:Lista[] = [];

    constructor(){
       /*const list1 = new Lista('Recolectar piedras');
       const list2 = new Lista('Heroes a vencer');
       this.listas.push(list1,list2);
       console.log(this.listas);*/
       this.loadStorage();
    }


    addList(lista:Lista){
        this.listas.push(lista);
        this.saveStorage();
    }

    deleteList(lista:Lista){
        this.listas = this.listas.filter( data =>{
            return data.id != lista.id;
        });
        this.saveStorage();
    }
    saveStorage(){
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    loadStorage(){
        if (localStorage.getItem('data')) {
            this.listas =JSON.parse(localStorage.getItem('data'));
        }else{
            this.listas = [];
        }
    }
}