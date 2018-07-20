import { Component, OnInit } from '@angular/core';
import { ImageLoaderService } from '../../services/image-loader.service';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
export interface Item {name: string; url:string; }

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styles: []
})
export class PhotosComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public ils:ImageLoaderService, private afs:AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('images');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {

  }

}
