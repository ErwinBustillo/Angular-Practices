import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Heroe } from '../interfaces/heroe.interface';

import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = ""
  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return  this.http.post(this.heroesURL,body,{headers}).pipe((res:any) => {
        console.log(res.json());
        return res.json();
      })
  }
}
