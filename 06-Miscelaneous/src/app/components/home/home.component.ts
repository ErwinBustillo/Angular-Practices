import { Component, OnInit,OnChanges,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-clases></app-clases>
  <br>
  <p [appResaltado]="'orange'">Hola mundo</p>
  <br> 
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,OnDestroy {

  constructor() { 

  }

  ngOnInit() {
    console.log("ON INIT");
  }

  ngOnChanges(){
    console.log("ON CHANGES");
  }

  ngDoCheck(){
    console.log("ON DO CHECK");
  }

  ngOnDestroy(){
    console.log("ON DESTROY");
  }



}
