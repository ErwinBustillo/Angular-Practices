import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = "https://heroesapp-13058.firebaseio.com/heroes.json"
  heroeUrl:string = "https://heroesapp-13058.firebaseio.com/heroes/";
  constructor(private http:HttpClient) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return  this.http.post(this.heroesURL,body,{headers})
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

  actualizarHeroe(heroe:Heroe,key$:string){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;

    return  this.http.put(url,body,{headers})
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

  getHeroe( key$:string){
    let url = `${this.heroeUrl}/${key$}.json`;
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get(url,{headers})
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }
}
