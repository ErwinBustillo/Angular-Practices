import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '57e78f31bdaf3919132c3ae5fbf21c8e';
  private urlLocalHost = 'https://api.themoviedb.org/3';
  constructor(private _http: HttpClient) {}

  private getURL(request: string, language: string): string {
     return `${this.urlLocalHost}${request}&api_key=${this.apiKey}&language=${language}&callback=JSONP_CALLBACK`;
  }
  getMostPopular() {
    const request = '/discover/movie?sort_by=popularity.desc';
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res ));
  }

  searchMovie(texto:string){
    const request = `/search/movie?query=${texto}&sort_by=popularity.desc`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res ));
  }
}
