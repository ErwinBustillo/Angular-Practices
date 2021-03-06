import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'heroes' },

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
