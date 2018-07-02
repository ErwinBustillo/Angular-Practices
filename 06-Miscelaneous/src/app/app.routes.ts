import { USUARIO_ROUTES } from './components/usuarios/usuario.routes';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id',
     component: UsuariosComponent,
     children: USUARIO_ROUTES
     },
    { path: '**',pathMatch: 'full',redirectTo:'home' }
    
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES)

