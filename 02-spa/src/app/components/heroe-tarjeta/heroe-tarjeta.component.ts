import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}; // con input el heroe puede venir de afuera
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<number>;


  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {

  }

  verHeroe(){
    // console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
    //this.heroeSeleccionado.emit(this.index);
  }

}
