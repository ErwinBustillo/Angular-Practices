
import { Item } from './../interfaces/item.interface';
import { FileItem } from './../models/file-item';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {

  private FOLDER_IMAGES = 'images';
  imagesCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore) { 
    this.imagesCollection = this.afs.collection('images', x => x.orderBy('name', 'asc'));

  }

  loadImagesFirebase(images:FileItem[]){
   // console.log(images);

    const storageRef = firebase.storage().ref();

    for ( const item of images ) {

      item.isUploading = true;
      if ( item.progress >= 100 ) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask =
                  storageRef.child(`${ this.FOLDER_IMAGES }/${ item.name_file }`)
                            .put( item.file );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
              ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
                          item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
              ( error ) => console.error('Error al subir', error ),
              () => {

                console.log('Imagen cargada correctamente');
                item.url = uploadTask.snapshot.downloadURL;
                item.isUploading = false;
                const i:Item = {
                  name: item.name_file,
                  url: item.url
                }
                this.guardarImagen(i);
              });
    }
  }
    
  private guardarImagen( item ) {

   this.afs.collection('images').ref.add(item);
    //this.db.collection<Item>(`${ this.FOLDER_IMAGES }`).add( imagen );

  }
} 

