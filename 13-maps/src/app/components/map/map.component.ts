import { MapEditComponent } from './map-edit.component';
import { Component, OnInit } from '@angular/core';
import { Marker } from '../../clases/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';

import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers:Marker[] = [];

  lat: number = 11.0131945;
  lng: number = -74.8298523;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  addMarker(e){
    console.log(e);
    const m = new Marker(e.coords.lat,e.coords.lng);
    this.markers.push(m);
    this.snackBar.open('Marker added',"Close",{ duration:3000});
    this.saveStorage();
  }

  editMarker(marker:Marker){

    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: {title: marker.title, desc: marker.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (!result) {
        return;
      }
      marker.title = result.title;
      marker.desc = result.desc;
      this.snackBar.open('Marker updated',"Close",{ duration:3000});
      this.saveStorage();
    });

  }

  deleteMarker(idx:number){
    this.markers.splice(idx,1);
    this.snackBar.open('Marker delete',"Close",{ duration:3000});
    this.saveStorage();
  }

  saveStorage(){
    localStorage.setItem('markers',JSON.stringify(this.markers));
  }

}
