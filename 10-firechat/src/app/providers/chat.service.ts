import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message } from '../interfaces/message.interface';

import {map} from  'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  
  public user:any = {};
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user =>{
      console.log(user);
      if (!user) {
        return;
      }
      this.user.name = user.displayName;
      this.user.uid = user.uid;
    })
  }

  loadMessages(){
    this.itemsCollection = this.afs.collection<Message>('chats',
       ref => ref.orderBy('date','desc').limit(10));
    return this.itemsCollection.valueChanges()
        .pipe(map( mensajes=>{
          console.log(mensajes);

          this.chats = [];

          for (let mensaje of mensajes){
            this.chats.unshift(mensaje);
          }
          return this.chats;
          //this.chats = mensajes;
        })
      )
  }

  addMessages(texto:string){
      let mensaje:Message = {
        name:this.user.name,
        message:texto,
        date:new Date().getTime(),
        uid:this.user.uid
      }

      return this.itemsCollection.add(mensaje);
  }

  login(proveedor:string) {
    if(proveedor === 'google') {

      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }else{
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());

    }
  }
  logout() {
    this.user = {};
    this.afAuth.auth.signOut();
  }

}
