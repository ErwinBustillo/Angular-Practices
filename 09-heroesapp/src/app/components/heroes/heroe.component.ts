import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  nuevo:boolean = false;
  id:string;
  constructor(private _heroeService:HeroesService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params
      .subscribe(parametros =>{
        //console.log(parametros);
        this.id = parametros['id'];
        if (this.id !== "nuevo") {
          this._heroeService.getHeroe(this.id)
            .subscribe( (h:Heroe) => this.heroe = h);
        } else {
          
        }
      });
   }

  ngOnInit() {

  }

  guardar(){
    console.log(this.heroe);

    
    if (this.id == "nuevo") {
      //insertando
      this._heroeService.nuevoHeroe(this.heroe)
      .subscribe( (data:any) => {
        this.router.navigate(['/heroe',data.name]);
      }, err=> console.error(err));
    } else {
      //actualizando
      this._heroeService.actualizarHeroe(this.heroe,this.id)
      .subscribe( (data:any) => {
        console.log(data);
        //this.router.navigate(['/heroe',data.name]);
      }, err=> console.error(err));
    }
  }

  agregarNuevo(forma:NgForm){

    this.router.navigate(['/heroe','nuevo']);

    forma.reset({
      casa:"Marvel"
    });
  }

}
