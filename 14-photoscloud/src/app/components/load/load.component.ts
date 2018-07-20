import { FileItem } from './../../models/file-item';
import { Component, OnInit } from '@angular/core';
import { ImageLoaderService } from '../../services/image-loader.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styles: []
})
export class LoadComponent implements OnInit {

  isDropping:boolean = false;

  files:FileItem[] = [];
  
  constructor(public ils:ImageLoaderService) { }

  ngOnInit() {
  }

  loadImages(){
    this.ils.loadImagesFirebase(this.files);
  }

  testElement(event){
    console.log(event);
  }

  clean(){
    this.files = [];
  }

}
