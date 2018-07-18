import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL:string = "https://www.googleapis.com/youtube/v3";
  private apiKey:string = "AIzaSyDtohfINcF0ZOxLeRhkV35mihnXMz-36cg";
  private playlist:string = "UCzA24m0d3_HpbJGnWgo_j0A";
  private nextPageToken:string;
  constructor(private http:HttpClient) { }

  getVideos(){
      let url= `${this.youtubeURL}/playlists?part=snippet&channelId=${this.playlist}&key=${this.apiKey}`;
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");

      if (this.nextPageToken) {
        url = `${this.youtubeURL}/playlists?part=snippet&channelId=${this.playlist}&pageToken=${this.nextPageToken}&key=${this.apiKey}`;
        //params.set('pageToken', this.nextPageToken);
      }
      return this.http.get(url,{headers:headers})
         .pipe(map( (res:any) => {
            this.nextPageToken = res.nextPageToken;
            console.log(res)
            let videos:any[] =[];
            for(let v of res.items){
              let snippet= v.snippet;
              videos.push(snippet);
            }

            return videos;
         }));
  }
}
