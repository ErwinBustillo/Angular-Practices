import { Injectable } from "@angular/core";
import { Lista } from '../models';

@Injectable()
export class DeseosService {
    
    listas:Lista[] = [];

    constructor(){
       const list1 = new Lista('Recolectar piedras');
       const list2 = new Lista('Heroes a vencer');
       this.listas.push(list1,list2);
       console.log(this.listas);
    }
}