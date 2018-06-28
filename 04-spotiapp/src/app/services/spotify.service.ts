import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  // para centralizar la data buenas practicas
  getQuery(query:string){
      const url = `https://api.spotify.com/v1/${query}`;
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQB57k4LgoHAUh6jfQxj_mt-xR7b0NQSPK5rcvn4Qs4EeyuyeQ-PRqxFthYF-_b74UCFDDwE63b7c4pKSsPsuiAdNLoUGzEWJ_VpEnzNHjzJLSS1Caf6oJEA7N61XyGoN5GfPaoySebTRKocIr8LyKdgm9fdf3A'
      });

      return this.http.get(url,{headers});
  }

  getNewReleases(){
     
    return this.getQuery('browse/new-releases?limit=20')
       .pipe(map( data => data['albums'].items));

  }
  
  getArtistas(termino:string){
   
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
        .pipe(map( data => data['artists'].items));
    
  }

  getArtista(id:string){
   
    return this.getQuery(`artists/${id}`);
        //.pipe(map( data => data['artists'].items));
    
  }

  getTopTracks(id:string){
   
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe(map( data => data['tracks']));
    
  }
}
