import { AuthGuardService } from './services/auth-guard.service';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'protegida',canActivate:[AuthGuardService], component: ProtegidaComponent },
    { path: '**',pathMatch:'full',redirectTo:'home' },

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
