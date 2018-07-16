import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SearchComponent } from './components/search/search.component';


const ROUTES: Routes = [
    { path: 'home',component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'pelicula',component: PeliculasComponent },
    { path: '**', pathMatch:'full',redirectTo:'home'},

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

