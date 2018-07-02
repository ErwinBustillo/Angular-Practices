import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private auth:AuthService) {
      auth.handleAuthentication();
  }

  ngOnInit() {

  }

  login(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }

}
