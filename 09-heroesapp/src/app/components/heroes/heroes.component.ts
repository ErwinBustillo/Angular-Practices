import { Heroe } from './../../interfaces/heroe.interface';
import { HeroesService } from './../../services/heroes.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) {
      this._heroesService.getHeroes()
        .subscribe( (data:any) => {
          //console.log(data);
          
          //this.loading = false;
          setTimeout(() => {
            this.loading = false;
            this.heroes = data;
          }, 1000);
        })
  }

  ngOnInit() {

  }

  borrarHeroe(key$:string){
    this._heroesService.borrarHeroe(key$)
      .subscribe(res => {
        if (res) {
          console.error(res);
        } else {
          //
          delete this.heroes[key$];
        }
      })
  }

}
