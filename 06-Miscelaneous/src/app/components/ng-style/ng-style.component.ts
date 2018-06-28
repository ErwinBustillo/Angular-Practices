import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tam">
      Hola mundo ... esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tam = tam + 5">+</button>
    <button class="btn btn-primary" (click)="tam = tam - 5">-</button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tam:number = 20;
  constructor() { }

  ngOnInit() {
  }

}
