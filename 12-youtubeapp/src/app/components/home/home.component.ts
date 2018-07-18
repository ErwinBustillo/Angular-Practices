import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[] =[];

  videoSelected:any;

  constructor(private ys:YoutubeService) {
    this.ys.getVideos()
      .subscribe( videos => {
        //console.log(videos);
        this.videos = videos;
      });
   }

  ngOnInit() {
  }

  watchVideo(video:any){
    console.log(video);
    this.videoSelected = video;
    $('#modalVideo').modal();

  }
  close(){
    this.videoSelected = null;
    $('#modalVideo').modal('hide');
  }

  loadMore(){
    this.ys.getVideos()
      .subscribe( videos => {
        //console.log(videos);
        this.videos.push.apply(this.videos,videos);
      });
  }
}
